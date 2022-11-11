Blockly.Blocks['controls_if_else'] = {
	init: function () {
		this.elseCount_ = 0;
		this.elseIfCount_ = 0;
		this.appendValueInput('V0').setCheck('Boolean').appendField('if');
		this.appendStatementInput('S0').setCheck(null).appendField('do');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		this.setMutator(
			new Blockly.Mutator([
				'controls_if_mutation_else_if',
				'controls_if_mutation_else',
			])
		);
	},
	mutationToDom: function () {
		const element = document.createElement('mutation');
		element.setAttribute('else_if', this.elseIfCount_);
		element.setAttribute('else', this.elseCount_);
		return element;
	},
	domToMutation: function (element) {
		this.elseIfCount_ = parseInt(element.getAttribute('else_if'), 10);
		this.elseCount_ = parseInt(element.getAttribute('else'), 10);
		this.elseCount_ = this.elseCount_ > 1 ? 1 : this.elseCount_;
		this.updateShape_();
	},
	decompose: function (workspace) {
		const containerBlock = workspace.newBlock('controls_if_mutation');
		containerBlock.initSvg();
		let connection = containerBlock.nextConnection;
		for (let i = 0; i < this.elseIfCount_; i++) {
			const itemBlock = workspace.newBlock('controls_if_mutation_else_if');
			itemBlock.initSvg();
			connection.connect(itemBlock.previousConnection);
			connection = itemBlock.nextConnection;
		}
		if (this.elseCount_) {
			const itemBlock = workspace.newBlock('controls_if_mutation_else');
			itemBlock.initSvg();
			connection.connect(itemBlock.previousConnection);
		}
		return containerBlock;
	},
	compose: function (topBlock) {
		let block = topBlock.nextConnection.targetBlock();
		this.elseCount_ = 0;
		this.elseIfCount_ = 0;
		const values = [];
		const statements = [];
		let elseConnection = null;
		while (block) {
			if (block.type == 'controls_if_mutation_else_if') {
				values.push(block.valueConnection_);
				statements.push(block.statementConnection_);
				this.elseIfCount_++;
			} else if (block.type === 'controls_if_mutation_else') {
				elseConnection = block.statementConnection_;
				this.elseCount_++;
			}
			block = block.nextConnection && block.nextConnection.targetBlock();
		}
		this.updateShape_();
		for (let i = 0; i < this.elseIfCount_; i++) {
			Blockly.Mutator.reconnect(values[i], this, 'V' + (i + 1));
			Blockly.Mutator.reconnect(statements[i], this, 'S' + (i + 1));
		}
		Blockly.Mutator.reconnect(elseConnection, this, 'ELSE');
	},
	saveConnections: function (containerBlock) {
		let block = containerBlock.nextConnection.targetBlock();
		let i = 1;
		while (block) {
			if (block.type === 'controls_if_mutation_else_if') {
				const value = this.getInput('V' + i);
				const statement = this.getInput('S' + i);
				block.valueConnection_ = value && value.connection.targetConnection;
				block.statementConnection_ =
					statement && statement.connection.targetConnection;
				i++;
			} else if (block.type === 'controls_if_mutation_else') {
				const statement = this.getInput('ELSE');
				block.statementConnection_ =
					statement && statement.connection.targetConnection;
			}
			block = block.nextConnection && block.nextConnection.targetBlock();
		}
	},
	updateShape_: function () {
		let i = 1;
		while (this.getInput('V' + i)) {
			this.removeInput('V' + i, true);
			this.removeInput('S' + i, true);
			i++;
		}
		if (this.getInput('ELSE')) {
			this.removeInput('ELSE', true);
		}
		for (let j = 1; j <= this.elseIfCount_; j++) {
			this.appendValueInput('V' + j)
				.setCheck('Boolean')
				.appendField('else if');
			this.appendStatementInput('S' + j).appendField('do');
		}
		if (this.elseCount_) {
			this.appendStatementInput('ELSE').appendField('else');
		}
	},
	saveExtraState: function () {
		return {
			elseIfCount: this.elseIfCount_,
			elseCount: this.elseCount_,
		};
	},
	loadExtraState: function (state) {
		this.elseIfCount_ = state['elseIfCount'];
		this.elseCount_ = state['elseCount'];
		this.updateShape_();
	},
};

Blockly.Blocks['controls_if_mutation'] = {
	init: function () {
		this.appendDummyInput().appendField('conditions stack');
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['controls_if_mutation_else_if'] = {
	init: function () {
		this.appendDummyInput().appendField('else if');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['controls_if_mutation_else'] = {
	init: function () {
		this.appendDummyInput().appendField('else');
		this.setPreviousStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
