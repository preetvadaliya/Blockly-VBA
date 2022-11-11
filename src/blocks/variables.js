Blockly.Blocks['variables_variable_dec'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('Initialize')
			.appendField(new Blockly.FieldVariable(), 'V_NAME')
			.appendField('as')
			.appendField(
				new Blockly.FieldDropdown([
					['Byte', 'Byte'],
					['Integer', 'Integer'],
					['Long', 'Long'],
					['Single', 'Single'],
					['Double', 'Double'],
					['Currency', 'Currency'],
					['Decimal', 'Decimal'],
					['String', 'String'],
					['Boolean', 'Boolean'],
					['Date', 'Date'],
					['Object', 'Object'],
					['Variant', 'Variant'],
				]),
				'V_TYPE'
			);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['variables_variable_set'] = {
	init: function () {
		this.appendValueInput('I0')
			.setCheck(null)
			.appendField('set')
			.appendField(new Blockly.FieldVariable(), 'V_NAME')
			.appendField('to');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['variables_variable_get'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('get')
			.appendField(new Blockly.FieldVariable(), 'V_NAME');
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};
