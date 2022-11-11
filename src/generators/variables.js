Blockly.VBA['variables_variable_dec'] = function (block) {
	var V_NAME = block.getField('V_NAME').getVariable().name;
	var V_TYPE = block.getFieldValue('V_TYPE');
	var code = `Dim ${V_NAME} As ${V_TYPE}\n`;
	return code;
};

Blockly.VBA['variables_variable_set'] = function (block) {
	var V_NAME = block.getField('V_NAME').getVariable().name;
	var I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	var code = `${V_NAME} = ${I0}\n`;
	return code;
};

Blockly.VBA['variables_variable_get'] = function (block) {
	var V_NAME = block.getField('V_NAME').getVariable().name;
	var code = `${V_NAME}`;
	return [code, Blockly.VBA.ORDER_NONE];
};
