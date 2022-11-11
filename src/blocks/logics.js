Blockly.Blocks['logics_true_false'] = {
	init: function () {
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['True', 'True'],
				['False', 'False'],
			]),
			'OP'
		);
		this.setOutput(true, null);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['logics_operators'] = {
	init: function () {
		this.appendValueInput('I0').setCheck(null);
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['Imp', 'Imp'],
				['And', 'And'],
				['Or', 'Or'],
				['Xor', 'Xor'],
			]),
			'OP'
		);
		this.appendValueInput('I1').setCheck(null);
		this.setOutput(true, null);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['logics_not'] = {
	init: function () {
		this.appendValueInput('I0').setCheck(null).appendField('not');
		this.setOutput(true, null);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['logics_operators_2'] = {
	init: function () {
		this.appendValueInput('I0').setCheck(null);
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['Eqv', 'Eqv'],
				['Is', 'Is'],
				['Like', 'Like'],
			]),
			'OP'
		);
		this.appendValueInput('I1').setCheck(null);
		this.setOutput(true, null);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['logics_operators_3'] = {
	init: function () {
		this.appendValueInput('I0').setCheck(null);
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['<', '<'],
				['<=', '<='],
				['>', '>'],
				['>=', '>='],
				['=', '='],
				['<>', '<>'],
			]),
			'OP'
		);
		this.appendValueInput('I1').setCheck(null);
		this.setOutput(true, null);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
