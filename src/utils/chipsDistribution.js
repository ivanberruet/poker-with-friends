export default function chipsDistribution(players_num,chips) {
	players_num *= 2
	const CHIPS = chips;
	
	let totalChips = {black: 0,blue: 0,green: 0,red: 0,white: 0}
	let total_value = 0
	let player_chips = {black: 0,blue: 0,green: 0,red: 0,white: 0}
	let player_value = 0
	let remaining_chips = {black: 0,blue: 0,green: 0,red: 0,white: 0}
	let remaining_value = 0

	if (players_num != 0) {
		for (let i = 0; i < CHIPS.length; i++) {
			for (let j = 0; j < CHIPS[i].length; j++) {
				if (CHIPS[i][j].color === 'black') {totalChips.black += CHIPS[i][j].quantity}
				else if (CHIPS[i][j].color === 'blue') {totalChips.blue += CHIPS[i][j].quantity}
				else if (CHIPS[i][j].color === 'green') {totalChips.green += CHIPS[i][j].quantity}
				else if (CHIPS[i][j].color === 'red') {totalChips.red += CHIPS[i][j].quantity}
				else if (CHIPS[i][j].color === 'white') {totalChips.white += CHIPS[i][j].quantity}
			}
		}
		total_value = totalChips.black*100 + totalChips.blue*50 + totalChips.green*25 + totalChips.red*10 + totalChips.white*5
		
		player_chips = {
			...totalChips,
			black: Math.floor(totalChips.black / players_num),
			blue: Math.floor(totalChips.blue / players_num),
			green: Math.floor(totalChips.green / players_num),
			red: Math.floor(totalChips.red / players_num),
			white: Math.floor(totalChips.white / players_num)
		}
		player_value = player_chips.black*100 + player_chips.blue*50 + player_chips.green*25 + player_chips.red*10 + player_chips.white*5

		remaining_chips = {
			...totalChips,
			black: totalChips.black - players_num * player_chips.black,
			blue: totalChips.blue - players_num * player_chips.blue,
			green: totalChips.green - players_num * player_chips.green,
			red: totalChips.red - players_num * player_chips.red,
			white: totalChips.white - players_num * player_chips.white
		}
		remaining_value = remaining_chips.black*100 + remaining_chips.blue*50 + remaining_chips.green*25 + remaining_chips.red*10 + remaining_chips.white*5
	}
	return [totalChips, total_value, player_chips, player_value, remaining_chips, remaining_value]
}