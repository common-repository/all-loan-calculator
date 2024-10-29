setupConfig && setupConfig({"defaults":{"controls":{"repaymentType":[{"value":"PI","label":"Principal & interest"},{"value":"IO","label":"Interest only"}],"frequency":[{"value":"month","label":"Monthly"},{"value":"fortnight","label":"Fortnightly"},{"value":"week","label":"Weekly"}],"term":{"keyboard":false,"step":1,"max":30,"min":1},"interestRate":{"keyboard":false,"step":0.01,"max":25,"min":0.01},"principal":{"keyboard":false,"step":50,"max":5000000,"min":0}},"logo":{"url":"","enabled":false},"values":{"hasPoweredBy":true,"hasEmailFeature":false,"displayType":"GRAPH","repaymentType":"PI","frequency":"month","term":30,"interestRate":6.5,"principal":250000}},"cta":{"ctaLinkUrl":"http://www.gbst.com","ctaLink":"Get in touch","ctaLabel":"Need to know more","enabled":false},"labels":{"emailBox":{"thankYouMessage":"Thank you, your email has been sent.","fromEmailTitle":"Loan Repayment Summary","fromEmail":"default@default.com.au","title":"Loan Repayment Summary"},"infoBox":{"content":"<p>The Loan Repayments Calculator calculates the repayment amount depending upon the repayment frequency requested, which is dependent upon amount, term and interest rate.</p><h3>Calculator Assumptions</h3><h4>Length of Month</h4><p>Months are of equal length. However given some months are longer than others interest charged will vary depending upon the month.</p><h4>Number of Weeks & Fortnights in a Year</h4><p>One year is assumed to contain exactly 52 weeks or 26 fortnights. Thus each year has 364 days.</p><h4>Rounding of Repayment Amounts</h4><p>The calculator uses the unrounded repayment to derive the amount of interest payable over the full term of the loan, however, institutions round repayments to the nearest cent. Unrounded payments provide for constant line within the graph. Note that the final repayment after the increase in repayment amount will be a partial repayment as required to reduce the loan balance to zero.</p><h4>Interest Rate</h4><p>The interest rate input in the loan section of the calculator is a nominal interest rate per annum. The interest applied over each repayment period has been calculated as the nominal interest rate divided by the number of deposit periods.</p><h4>Timing of Interest Conversion</h4><p>The calculator assumes that interest is charged to the loan account at the same frequency as the repayments are made. In practice, there may be differences between the timing of the loan repayments and the timing of the interest charges being added to the loan balance.</p>","title":"Calculator Information"},"chartTooltip":{"remainingValueHeader":"Remaining value","loanItemHeader":"Loan item","title":"Year {{year}}"},"chart":{"yAxis":"Amount owing ({{unit}})","xAxis":"Years","interestRemaining":"Interest","principalRemaining":"Principal","totalRemaining":"Total"},"results":{"amortizationTable":{"balanceHeader":"Balance","interestHeader":"Interest","principalHeader":"Principal","paymentNumberHeader":"Payment #"},"displayType":{"borderColor":"#FFFFFF","table":"Table","graph":"Graph"},"showDisplayType":true,"resultsHeader":"Your results","totalInterest":"Total interest payable","regularRepayment":"{{frequencyLabel}} repayments"},"controls":{"chartTableRadioButton":"","repaymentType":"Loan type","frequency":"Payment frequency","termFormat":{"other":"{{count}} years","one":"{{count}} year"},"term":"Loan term","interestRate":"Interest rate","principal":"Loan amount","title":"Your loan details"},"loanCalculator":{"disclaimer":"Note: The results from this calculator should be used as an indication only. Results do not represent either quotes or pre-qualifications for a loan. The specific details of your loan will be provided to you in your loan contract. It is advised that you consult your financial adviser before taking out a loan.","calculatorTitle":"Loan Calculator"}},"number":{"format":{"separator":".","delimiter":","},"currency":{"format":{"htmlFormat":"<sup>%u</sup><span>%n</span>","format":"%u%n","unit":"$"}}},"theme":{"colors":{"graphSecondaryColor":"#000000","graphPrimaryColor":"#a3adb2","resultPanelColor":"#000000","resultsHeaderBgColor":"#F2F4F6","resultsHeaderColor":"#000000","disclaimerTextColor":"#B2B2B2","textColor":"","subtitleBgColor":"#F2F4F6","subtitleColor":"#FFFFFF","titleColor":"#ffffff","secondaryColor":"#c20000","primaryColor":"#c20000"},"type":"flat"}});