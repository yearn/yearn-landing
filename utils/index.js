import	{ethers}	from	'ethers';

export const toAddress = (address) => {
	if (!address) {
		return ethers.constants.AddressZero;
	}
	if (address === 'GENESIS') {
		return ethers.constants.AddressZero;
	}
	try {
		return ethers.utils.getAddress(address);	
	} catch (error) {
		return ethers.constants.AddressZero;
	}
};

export function	parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a class='underline cursor-pointer text-bluepillblue-regular' target='_blank' href='$2'>$1</a>");

	return htmlText.trim();
}
