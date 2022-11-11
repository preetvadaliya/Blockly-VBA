Blockly.Blocks['maths_number'] = {
	init: function () {
		this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'F0');
		this.setOutput(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['maths_operators'] = {
	init: function () {
		this.appendValueInput('I0').setCheck(null);
		this.appendDummyInput().appendField(
			new Blockly.FieldDropdown([
				['+', '+'],
				['-', '-'],
				['*', '*'],
				['/', '/'],
				['^', '^'],
			]),
			'OP'
		);
		this.appendValueInput('I1').setCheck(null);
		this.setOutput(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['maths_trigonometry'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField(
				new Blockly.FieldDropdown([
					['Sin', 'Sin'],
					['Cos', 'Cos'],
					['Tan', 'Tan'],
				]),
				'OP'
			);
		this.setOutput(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['maths_int_fix'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField(
				new Blockly.FieldDropdown([
					['Int', 'Int'],
					['Fix', 'Fix'],
				]),
				'OP'
			);
		this.setOutput(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['maths_abs_sgn_exp_sqr_log'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField(
				new Blockly.FieldDropdown([
					['Abs', 'Abs'],
					['Sgn', 'Sgn'],
					['Exp', 'Exp'],
					['Sqr', 'Sqr'],
					['Log', 'Log'],
				]),
				'OP'
			);
		this.setOutput(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
