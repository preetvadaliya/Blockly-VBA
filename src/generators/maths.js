Blockly.VBA['maths_number'] = function (block) {
	var F0 = block.getFieldValue('F0');
	var code = F0;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['maths_operators'] = function (block) {
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let OP = block.getFieldValue('OP');
	let I1 = Blockly.VBA.valueToCode(block, 'I1', Blockly.VBA.ORDER_ATOMIC);
	let code = `${I0 || '0'} ${OP} ${I1 || '0'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['maths_trigonometry'] = function (block) {
	let fnName = block.getFieldValue('OP');
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let code = `${fnName}${I0 || '()'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['maths_int_fix'] = function (block) {
	let fnName = block.getFieldValue('OP');
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let code = `${fnName}${I0 || '()'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['maths_abs_sgn_exp_sqr_log'] = function (block) {
	let fnName = block.getFieldValue('OP');
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let code = `${fnName}${I0 || '()'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};
