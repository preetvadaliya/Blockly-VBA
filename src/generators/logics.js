Blockly.VBA['logics_true_false'] = function (block) {
	let op = block.getFieldValue('OP');
	let code = `${op}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['logics_operators'] = function (block) {
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let op = block.getFieldValue('OP');
	let I1 = Blockly.VBA.valueToCode(block, 'I1', Blockly.VBA.ORDER_ATOMIC);
	let code = `${I0 || 'False'} ${op} ${I1 || 'False'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['logics_not'] = function (block) {
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let code = `Not ${I0 || 'False'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['logics_operators_2'] = function (block) {
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let op = block.getFieldValue('OP');
	let I1 = Blockly.VBA.valueToCode(block, 'I1', Blockly.VBA.ORDER_ATOMIC);
	let code = `${I0 || 'False'} ${op} ${I1 || 'False'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};

Blockly.VBA['logics_operators_3'] = function (block) {
	let I0 = Blockly.VBA.valueToCode(block, 'I0', Blockly.VBA.ORDER_ATOMIC);
	let op = block.getFieldValue('OP');
	let I1 = Blockly.VBA.valueToCode(block, 'I1', Blockly.VBA.ORDER_ATOMIC);
	let code = `${I0 || 'False'} ${op} ${I1 || 'False'}`;
	return [code, Blockly.VBA.ORDER_NONE];
};
