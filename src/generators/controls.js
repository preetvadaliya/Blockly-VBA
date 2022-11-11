Blockly.VBA['controls_if_else'] = function (block) {
	const v0 = Blockly.VBA.valueToCode(block, 'V0', Blockly.VBA.ORDER_ATOMIC);
	const s0 = Blockly.VBA.statementToCode(block, 'S0');
	let code = `If ${v0} Then\n${s0}\n`;
	for (let i = 1; i <= block.elseIfCount_; i++) {
		const v = Blockly.VBA.valueToCode(block, `V${i}`, Blockly.VBA.ORDER_ATOMIC);
		const s = Blockly.VBA.statementToCode(block, `S${i}`);
		code += `ElseIf ${v} Then\n${s}\n`;
	}
	if (block.elseCount_) {
		const s = Blockly.VBA.statementToCode(block, 'ELSE');
		code += `Else\n${s}\n`;
	}
	code += 'End If\n';
	return code;
};
