import $ from 'jquery';

$(document).ready(function() {
	$('a.printSummary').on('click',{div: "summarySheet"}, printDiv);
	$('a.printQrCode').on('click',{div: "qrCode"}, printDiv);
})

function printDiv(event) {
	
	var printContents = document.getElementById(event.data.div).innerHTML;    
   	var originalContents = document.body.innerHTML;      
   	document.body.innerHTML = printContents;     
   	window.print();     
	document.body.innerHTML = originalContents;

};