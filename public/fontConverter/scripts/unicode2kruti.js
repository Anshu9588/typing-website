
//************************************************************************
function convert()
{

var array_one = new Array(

"'" ,	"\*" ,
"\"" ,	"Ãž" ,
"â€˜" ,	"\^" ,
"â€™" ,	"\*" ,
"â€œ" ,	"Ãž" ,
"â€" ,	"ÃŸ" ,
"\(" ,	"Â¼" ,
"\)" ,	"Â½" ,
"\{" ,	"Â¿" ,
"\}" ,	"Ã€" ,
"\[" ,	"Â¼" , // there is no symbol for [ in Krutidev.
"\]" ,	"Â½" , // there is no symbol for ] in Krutidev.

"_" ,	"\&" ,
"-" ,	"\&" ,
"x" ,	"Ã›" ,
"\+" ,	"$" ,
"\=" ,	"Â¾" ,

"à¥¤" ,		"A" ,
"à¥°" ,		"Ã±" , // laaghava
"." ,	"-" , // Full stop
"?" ,	"\\" ,
"\," ,	"\]" ,
"%" ,	"Ã¾" , // Kaamachalaaoo.
"\:" ,	"%" , 
"\;" ,	"\(" ,
"\/" ,	"@" ,
// There is no symbol in Krutidev for hash (#).
"#" , "Ã¼" , // Kaamachalaaoo.

// Ãº Ã» Ã¼ Ã½ Ã¾ Ã¿  remain unchanged in Krutidev.


"à¥¦" ,		"Ã¥" ,
"à¥§" ,		"Æ’" ,
"à¥¨" ,		"â€ž" ,
"à¥©" ,		"â€¦" ,
"à¥ª" ,		"â€ " ,
"à¥«" ,		"â€¡" ,
"à¥¬" ,		"Ë†" ,
"à¥­" ,		"â€°" ,
"à¥®" ,		"Å " ,
"à¥¯" ,		"\â€¹" ,

"à¥˜à¥" ,	"D\+" ,
"à¥™à¥" ,	"\[\+" ,
"à¥šà¥" ,	"X+" ,
"à¥›à¥" ,	"T\+" ,
"à¤©à¥" ,	"U\+" ,
"à¥žà¥" ,	"Â¶\+" ,
"à¥Ÿà¥" ,	"Â¸\+" ,

"à¥˜" ,	"d\+" ,
"à¥™" ,	"[k\+" ,
"à¥š" ,	"x\+" ,
"à¥›" ,	"t\+" ,
"à¥œ" ,		"M\+" ,
"à¥" ,		"<\+" ,
"à¤©" ,	"u\+" ,
"à¥ž" ,	"Q\+" ,
"à¥Ÿ" ,	";\+" ,
"à¤±" ,		"j\+" ,

"à¤•à¥ƒ" ,	"â€”" ,
"à¤•à¥à¤•" ,	"Ã´" ,
"à¤•à¥à¤¤" ,	"Ã¤" ,
"à¤•à¥à¤·à¥" ,	"\{" ,
"à¤•à¥à¤·" ,	"\{k" ,
"à¤œà¥à¤žà¥" ,	"K~" ,
"à¤œà¥à¤ž" ,	"K" ,

"à¤Ÿà¥à¤Ÿ" ,	"Ãª" ,
"à¤Ÿà¥à¤ " ,	"Ã«" ,
"à¤¡à¥à¤¡" ,	"Ã¬" ,
"à¤¡à¥à¤¢" ,	"Ã¯" ,

"à¤¤à¥à¤¤à¥" ,	"Ã™" ,
"à¤¤à¥à¤¤" ,	"Ã™k" ,
"à¤¤à¥à¤°à¥" ,	"Â«" ,
"à¤¤à¥à¤°" ,	"\=" ,

"à¤¦à¥ƒ" ,	"â€“" ,
"à¤¦à¥à¤¦" ,	"Ã­" ,
"à¤¦à¥à¤§" ,	"\)" ,
"à¤¦à¥à¤¯" ,	"\|" ,
"à¤¦à¥à¤µ" ,	"\}" ,

"à¤›à¥à¤¯" ,	"NÃ®" ,
"à¤Ÿà¥à¤¯" ,	"VÃ®" ,
"à¤ à¥à¤¯" ,	"BÃ®" ,
"à¤¡à¥à¤¯" ,	"MÃ®" ,
"à¤¢à¥à¤¯" ,	"\<Ã®" ,

"à¤›à¥à¤°" ,	"NÂª" ,
"à¤Ÿà¥à¤°" ,	"VÂª" ,
"à¤ à¥à¤°" ,	"BÂª" ,
"à¤¡à¥à¤°" ,	"MÂª" ,
"à¤¢à¥à¤°" ,	"<Âª" ,

"à¤•à¥à¤°" ,	"Ã˜" ,
"à¤¦à¥à¤°" ,	"Ã¦" ,
"à¤ªà¥à¤°" ,	"Ã§" ,
"à¤«à¥à¤°" ,	"Ã" ,
"à¤¶à¥à¤°à¥" ,	"Ãœz" ,
"à¤¶à¥à¤°" ,	"J" ,

"à¤¶à¥ƒ" ,	"Ãœk`" , // spacial form
"à¤¶à¥à¤µ" ,	"Ãœo" , // spacial form

"à¤¹à¥ƒ" ,	"Ã¢" ,
"à¤¹à¥à¤¨" ,	"Ã " ,
"à¤¹à¥à¤®" ,	"Ã£" ,
"à¤¹à¥à¤¯" ,	"Ã¡" ,
"à¤¹à¥à¤°" ,	"Âºz" ,
"à¤¹à¥" ,	"Âº" ,

"à¥à¤°" ,	"z" ,

"à¤°à¥" ,	"\#" ,
"à¤°à¥‚" ,	"\:" ,

"à¤“" ,	"vks" ,
"à¤”" ,	"vkS" ,
"à¤‘" ,	"vâ€š" ,
"à¤†" ,	"vk" ,
"à¤…" ,	"v" ,
"à¤ˆà¤‚" ,	"bÂ±" ,
"à¤ˆ" ,	"Ãƒ" ,
//"à¤ˆ" ,		"bZ" ,
"à¤‡" ,	"b" ,
"à¤‰" ,	"m" ,
"à¤Š" ,	"Ã…" ,
"à¤" ,	"\,s" ,
"à¤" ,	"\," ,
"à¤‹" ,	"_" ,

"à¤•à¥" ,	"D" ,
"à¤•" ,	"d" ,
"à¤–à¥" ,	"\[" ,
"à¤–" ,	"\[k" ,
"à¤—à¥" ,	"X" ,
"à¤—" ,	"x" ,
"à¤˜à¥" ,	"\?" ,
"à¤˜" ,	"\?k" ,
"à¤™" ,		"Â³" ,

"à¤šà¥" ,	"P" ,
"à¤š" ,	"p" ,
"à¤›" ,	"N" ,
"à¤œà¥" ,	"T" ,
"à¤œ" ,	"t" ,
"à¤à¥" ,	"Ã·" ,
"à¤" ,	"\>" ,
"à¤ž" ,	"Â¥" ,
"à¤Ÿ" ,	"V" ,
"à¤ " ,	"B" ,
"à¤¡" ,	"M" ,
"à¤¢" ,	"\<" ,
"à¤£à¥" ,	"." ,
"à¤£" ,	".k" ,
"à¤¤à¥" ,	"R" ,
"à¤¤" ,	"r" ,
"à¤¥à¥" ,	"F" ,
"à¤¥" ,	"Fk" ,
"à¤¦" ,	"n" ,
"à¤§à¥" ,	"Ã¨" ,
"à¤§" ,	"Ã¨k" ,
"à¤¨à¥" ,	"U" ,
"à¤¨" ,	"u" ,
"à¤ªà¥" ,	"I" ,
"à¤ª" ,	"i" ,
"à¤«à¥" ,	"Â¶" ,
"à¤«" ,	"Q" ,
"à¤¬à¥" ,	"C" ,
"à¤¬" ,	"c" ,
"à¤­à¥" ,	"H" ,
"à¤­" ,	"Hk" ,
"à¤®à¥" ,	"E" ,
"à¤®" ,	"e" ,
"à¤¯à¥" ,	"Â¸" ,
"à¤¯" ,	"\;" ,
"à¤°" ,	"j" ,
"à¤²à¥" ,	"Y" ,
"à¤²" ,	"y" ,
"à¤³" ,	"G" ,
"à¤µà¥" ,	"O" ,
"à¤µ" ,	"o" ,
"à¤¶à¥" ,	"\'" ,
"à¤¶" ,	"\'k" ,
"à¤·à¥" ,	"\"" ,
"à¤·" ,	"\"k" ,
"à¤¸à¥" ,	"L" ,
"à¤¸" ,	"l" ,
"à¤¹" ,	"g" ,

"à¥‰" ,	"\â€š" ,
"à¥…" ,	"W" ,
"à¥‹" ,	"ks" ,
"à¥Œ" ,	"kS" ,
"à¤¾" ,	"k" ,
"à¥€à¤‚" ,	"Ãˆ" ,
"à¥€" ,	"h" ,
"à¥" ,	"q" ,
"à¥‚" ,	"w" ,
"à¥ƒ" ,	"`" ,
"à¥‡" ,	"s" ,
"à¥ˆ" ,	"S" ,
"à¤‚" ,	"a" ,
"à¤" ,	"Â¡" ,
"à¤ƒ" ,	"%" ,
"à¤½" ,	"Â·" ,
"à¥" ,	"~" ,
"à¤¼" ,	"\+" 	 );
  
var array_one_length = array_one.length ;

var modified_substring = document.getElementById("inputText").value + " " ;	// an space added to help recognise halant at the end of file

document.getElementById("outputText").value = "Conversion in progress.."  ;  

//*************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//*************************************************************
    var text_size = modified_substring.length ;	
	
    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;


    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
	  while ( (document.getElementById("inputText").value.charAt( sthiti2 ) != '\n')&(document.getElementById("inputText").value.charAt( sthiti2 ) != '\t')&(document.getElementById("inputText").value.charAt( sthiti2 ) != ' ') )   {sthiti2-- ;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("inputText").value.substring ( sthiti1, sthiti2 )  ;

//**********************************************************
//  Breaking part code over
//**********************************************************

	 Replace_Symbols( ) ;

    processed_text += modified_substring ;

    document.getElementById("outputText").value = processed_text  ;
   }


//**************************************************

function Replace_Symbols( )
   {

    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {

// replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.
modified_substring = modified_substring.replace ( /à¤•à¤¼/g , "à¥˜" )  ; 
modified_substring = modified_substring.replace ( /à¤–à¤¼â€Œ/g , "à¥™" )  ;
modified_substring = modified_substring.replace ( /à¤—à¤¼/g , "à¥š" )  ;
modified_substring = modified_substring.replace ( /à¤œà¤¼/g , "à¥›" )  ;
modified_substring = modified_substring.replace( 'à¤œ' + 'à¥' + 'à¤¼' , 'à¥›à¥' ) ;
modified_substring = modified_substring.replace ( /à¤¡à¤¼/g , "à¥œ" )  ;
modified_substring = modified_substring.replace ( /à¤¢à¤¼/g , "à¥" )  ;
modified_substring = modified_substring.replace ( /à¤¨à¤¼/g , "à¤©" )  ;
modified_substring = modified_substring.replace ( /à¤«à¤¼/g , "à¥ž" )  ;
modified_substring = modified_substring.replace ( /à¤¯à¤¼/g , "à¥Ÿ" )  ;
modified_substring = modified_substring.replace ( /à¤°à¤¼/g , "à¤±" )  ;


//"à¤¿à¤‚",	"Ã‡" ,

// "à¥€à¤‚" ,	"Ãˆ" ,

// "à¥€Z" ,	"ÃŠ" ,
// "à¥ˆà¤‚Z" ,	"\â€º" ,
// "à¥ˆà¤‚Z" ,	"Ãµ" ,
// "à¤‚Z" ,	"Â±"  ,
// "Ã†" ,	"à¤°à¥f" ,
// "Ã‰" ,	"à¤°à¥Ã‡" ,


// These two to avoid conversion of à¤°à¥ into Z.
modified_substring = modified_substring.replace ( /à¤¤à¥à¤°à¥/g , "Â«" )  ; 
modified_substring = modified_substring.replace ( /à¤¶à¥à¤°à¥/g , "Ãœz" )  ;
 
modified_substring = modified_substring.replace( /à¤°à¥/g , "Z" ) ;

modified_substring = modified_substring.replace ( /Â«/g , "à¤¤à¥à¤°à¥" )  ; 
modified_substring = modified_substring.replace ( /Ãœz/g , "à¤¶à¥à¤°à¥" )  ; 

// following statements for adjusting postion of i maatraas.

modified_substring = modified_substring.replace( /à¤¿à¤‚/g , "Ã‡" ) ;
modified_substring = modified_substring.replace( /à¤¿/g , "f" ) ;

modified_substring = modified_substring.replace( /([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¥œà¤¢à¥à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])([Ã‡f])/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¥œà¤¢à¥à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])(à¥)([Ã‡f])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¥œà¤¢à¥à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])(à¥)([Ã‡f])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /Zf/g , "Ã†" ) ;
modified_substring = modified_substring.replace( /ZÃ‡/g , "Ã‰" ) ;


// **************

//following three statement for adjusting position of reph ie, half r .


modified_substring = modified_substring.replace( /Z([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¤¢à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])([à¥])/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /Z([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¤¢à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])([à¥])/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /Z([à¤•à¤–à¤—à¤˜à¤™à¤šà¤›à¤œà¤à¤žà¤Ÿà¤ à¤¡à¤¢à¤£à¤¤à¤¥à¤¦à¤§à¤¨à¤ªà¤«à¤¬à¤­à¤®à¤¯à¤°à¤²à¤µà¤¶à¤·à¤¸à¤¹à¥˜à¥™à¥šà¥›à¥œà¥à¥ž])([à¤¾à¥…à¥€à¥à¥‚à¥ƒà¥‡à¥ˆà¥‹à¥Œà¤‚à¤]*)/g , "$1$2Z" ) ;

modified_substring = modified_substring.replace( /à¥€Z/g , "ÃŠ" ) ;
modified_substring = modified_substring.replace( /à¥ˆà¤‚Z/g , "Ãµ" ) ;
modified_substring = modified_substring.replace( /à¤‚Z/g , "Â±" ) ;

/*

//rem changing à¤µ to à¤•  and à¤ª to à¤« etc

modified_substring = modified_substring.replace( /à¤•([à¥à¥‚à¥ƒà¥„à¥‡à¥ˆà¤‚&à¤]*)/g , "ke$1Ã€" );

modified_substring = modified_substring.replace( /à¤•à¥à¤°([à¥à¥‚à¥ƒà¥„à¥‡à¥ˆà¤‚&à¤]*)/g , "keÂ´$1Ã€" );

modified_substring = modified_substring.replace( /à¤«([à¥à¥‚à¥ƒà¥„à¥‡à¥ˆà¤‚&à¤]*)/g , "He$1Ã€" );

modified_substring = modified_substring.replace( /à¤«à¥à¤°([à¥à¥‚à¥ƒà¥„à¥‡à¥ˆà¤‚&à¤]*)/g , "HeÂ´$1Ã€" );
*/

// Halanta after which there is no constant but space, hypen, comma or full-stop etc
modified_substring = modified_substring.replace ( /[à¥]([ \,\;\.à¥¤\n\-\:])/g , "~$1" ) ;	   


// Now substitute Roman symbols for corresponding Devanagari symbols given in array_one.

        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx = input_symbol_idx + 2 )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.
		
modified_substring = modified_substring.replace( /Zks/g , "ksZ" ) ; 
modified_substring = modified_substring.replace( /~ Z/g , "Z~" ) ; 
modified_substring = modified_substring.replace( /Zk/g , "kZ" ) ; 

    } // end of the function  Replace_Symbols( )

  } // end of Convert_Unicode_to_Krutidev010 function