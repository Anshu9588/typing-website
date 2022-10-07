function convert()
{

var array_one = new Array(  '~' ,  'u' ,  'Âª' ,  '}' ,   'n' , 'p' ,  

'H' ,  'Â·' ,   'I' ,  'Â»' ,  'J' ,  'Â½' ,  'K' ,  

'M' ,  'Ã€' ,  'N' ,   'ÂµO' ,  'O' ,   'ÂµÃ' ,  'Ã' ,  'P' ,

'Q' ,  'R' ,   'Â¶S' ,  'S' ,   'Â¶T' ,   'T' ,   'U' ,  'ÃŠ' , 

'W' , 'Ã' ,  'V' ,  'Ã‹' ,  'Y',  'Ãœ' ,  'X' ,  'Z' ,  'Ã' ,


'\\' ,  'Ã¢' ,  '[' ,  'ÃŸ' ,  '^' ,   'Ã¤' ,  ']' ,   'Ã£' ,   '_'  ,  'Ã¥' ,

'`' ,    'a' ,    'c' ,    'Ã«',    'd' ,     'Ã¬',   

'e' ,  'Ã»' ,  'Ã­' ,  'f' ,  'Ã®' ,  'g' ,  'Ã±' ,  'h' ,  'j' ,  'Ãº' ,  'k' ,

'Ã”' ,  'Ã›' ,  'Ãš' ,  'Ã ' ,  'Ãž' , 'QÂ­' ,  'Âº$' ,  'ÃŒ' ,  'Ã' ,  'Ã•' ,  'l' ,  'ÃŽm' ,   'Â¸' ,   'â€ž' ,  'Ë†' ,  'Å“' ,  'Ã…' ,  'Ãˆ' ,


'AmÂ¡' ,  'Am{' ,  'Am|' ,  'Am' ,  'A' ,  'BÂ©' ,  'B' , 'C' , 'D',   'E{',  'E' ,  'F' ,

'Â§m' ,   'Â§w' ,   'Â§p' ,    'Â§y' ,    'Â±m' ,   'Â±w' ,   'Â±p' ,   'Â±y' ,    // for  changing the order  of anuswaar & chandrabindu with other maatraas

'mÂ°' ,    'm{' ,    'm|' ,    '{' ,   '|' ,  'mÂ¡' ,   'mÂ¢' ,   'Â¡' ,   'Â¢' , 

'm' ,    'r' ,   's' ,  't' ,    'w' ,   'Ã¾' ,  'y' ,   'Â§' ,  'Â¨' ,   'Â±',   'â€¢' ,  'Â¥' ,  'Â²' , 

'Ã‘' ,  'Â«' ,  'Ã©' ,  'Ãª' ,  '&' ,  '$' ,  '>' ,  'Âµ'  ,  'Â°' ,  '\Â¶'      )


var array_two = new Array(  'Â©' ,  'Â©' ,  'Â©à¤‚' ,  '{Â©' ,  'o' ,  'o' , 

"à¤•",  'à¤•à¥',  "à¤–",   'à¤–à¥' ,  "à¤—" ,  'à¤—à¥' ,  'à¤˜' ,  

'à¤š',  'à¤šà¥',  'à¤›' ,  'à¥›' ,  'à¤œ' ,  'à¥›à¥â€Œ' ,  'à¤œà¥' ,  'à¤' ,

"à¤Ÿ",  "à¤ ",   'à¥œ' ,  "à¤¡",   'à¥' ,  'à¤¢' , "à¤£" , 'à¤£à¥' ,

"à¤¥",  'à¤¥à¥' ,  "à¤¤",  'à¤¤à¥' ,  "à¤§", 'à¤§à¥' ,  "à¤¦",  "à¤¨" ,  'à¤¨à¥' ,


"à¤«", 'à¤«à¥' ,  "à¤ª", 'à¤ªà¥' ,  "à¤­",  'à¤­à¥' ,  "à¤¬",  'à¤¬à¥' ,  "à¤®" ,   'à¤®à¥' ,

"à¤¯",   "à¤°",   "à¤²",   'à¤²à¥' ,   "à¤µ",    'à¤µà¥' ,  

"à¤¶",  'à¤¶à¥' ,  'à¤¶à¥' ,  'à¤·' ,   'à¤·à¥' ,  "à¤¸",  'à¤¸à¥',  "à¤¹",  'à¤•à¥à¤·' ,  'à¤•à¥à¤·à¥' ,  'à¤œà¥à¤ž' ,

'à¤¦à¥à¤¦',  'à¤¦à¥à¤µ' , 'à¤¦à¥à¤¯' ,  'à¤ªà¥à¤°',  'à¤¨à¥à¤¨' ,  'à¤Ÿà¥à¤°' , 'à¤•à¥à¤¤' ,  'à¤¤à¥à¤°' ,  'à¤¦à¥à¤°',  'à¤¦à¥à¤§' ,  'à¤¶à¥à¤°' ,  'à¤¤à¥à¤¤' ,  'à¤•à¥à¤•' ,  'à¤²à¥à¤²' ,  'à¤¹à¥à¤µ' ,  'à¤¶à¥à¤µ' ,  'à¤Ÿà¥à¤Ÿ' , 'à¤¡à¥à¤¡' ,


'à¤”' ,  'à¤“' , 'à¤“à¤‚' ,  'à¤†' ,  'à¤…' ,  'à¤ˆ' ,  'à¤‡' ,   'à¤‰' ,  'à¤Š' ,  'à¤' ,  'à¤' ,  'à¤‹' ,

'à¤¾à¤‚' ,     'à¥à¤‚' ,    'à¥à¤‚',     'à¥‚à¤‚' ,     'à¤¾à¤' ,    'à¥à¤' ,     'à¥à¤' ,    'à¥‚à¤' ,

'à¥‰' ,  "à¥‹",   "à¥‹à¤‚",   "à¥‡",   "à¥‡à¤‚",   "à¥Œ",   "à¥Œà¤‚",    "à¥ˆ",    'à¥ˆà¤‚' ,  

"à¤¾",  "à¥€",  "à¥€",  "à¥€à¤‚",  "à¥",  'à¥' ,  "à¥‚",  'à¤‚' , 'à¤‚' ,   'à¤' ,  'à¤ƒ' ,  'à¥ƒ' ,  'à¥' ,  

'à¤¦à¥ƒ' ,  'à¥à¤°' ,  'à¤°à¥' ,  'à¤°à¥‚' ,  'à¥¤' ,  ''  ,  '' ,  ''  ,  '' ,  ''       )

 
var array_one_length = array_one.length ;

const fakeNum =0
if ( fakeNum===0 )  // if the input is plain text

   { 

      document.getElementById("outputText").value = "You have chosen SIMPLE TEXT  in ShreeLipi font to convert into Unicode. Conversion in progress.."  ;  

      var modified_substring = document.getElementById("inputText").value  ;


//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("inputText").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 10000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("inputText").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      modified_substring = document.getElementById("inputText").value.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;

//  Breaking part code over

      document.getElementById("outputText").value = processed_text  ;

    }
   }

else    // if input is HTML then
   {

             //   Can be copied from other converters and pasted here

    } // end of else loop for HTML case

 //--------------------------------------------------

 function Replace_Symbols( )
    {
     //substitute array_two elements in place of corresponding array_one elements

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )
            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                 indx = modified_substring.indexOf( array_one[input_symbol_idx] )

                } // end of while-00 loop
            } // end of for loop


//**********************************************************************************
// Code for Replacing  Special glyphs
//**********************************************************************************

//  chhotii 'i' kii maatraa  and its position  correction

  var position_of_i = modified_substring.indexOf( "o" )

  while ( position_of_i != -1 )  //while-02
  {
   var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
   var charecter_to_be_replaced = "o" + charecter_next_to_i
   modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "à¤¿" ) 
   position_of_i = modified_substring.search( /o/ , position_of_i + 1 ) // search for  'o' ahead of the current position.

  } // end of while-02 loop

// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

var position_of_wrong_ee = modified_substring.indexOf( "à¤¿à¥" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var charecter_to_be_replaced = "à¤¿à¥" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "à¥" + consonent_next_to_wrong_ee + "à¤¿" ) 
position_of_wrong_ee = modified_substring.search( /à¤¿à¥/ , position_of_wrong_ee + 2 ) // search for 'wrong ee' ahead of the current position. 

} // end of while-03 loop



//**********************************************************************************
// Code for Replacing  'q'  which is   chhotii 'i' kii maatraa  with anuswaar
//**********************************************************************************

  var position_of_i = modified_substring.indexOf( "q" )

  while ( position_of_i != -1 )  //while-02
  {
   var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
   var charecter_to_be_replaced = "q" + charecter_next_to_i
   modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "o" ) 
   position_of_i = modified_substring.search( /q/ , position_of_i + 1 ) // search for  'q' ahead of the current position.

  } // end of while-02 loop


// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

var position_of_wrong_ee = modified_substring.indexOf( "oà¥" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var charecter_to_be_replaced = "oà¥" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "à¥" + consonent_next_to_wrong_ee + "à¤¿à¤‚" ) 
position_of_wrong_ee = modified_substring.search( /oà¥/ , position_of_wrong_ee + 3 ) // search for 'wrong ee' ahead of the current position. 

} // end of while-03 loop


//  those 'o'  which do not come with halanta  should also be replaced now
modified_substring = modified_substring.replace( /o/g  ,  'à¤¿à¤‚' )  ;   



//**********************************************************************************
//Eliminating reph "Â©" and putting 'half - r' at proper position for this.
//**********************************************************************************
        set_of_matras = "à¤¾à¤¿à¥€à¥à¥‚à¥ƒà¥‡à¥ˆà¥‹à¥Œà¤‚à¤ƒà¤à¥…" 
         var position_of_reph = modified_substring.indexOf( "Â©" )

        while( position_of_reph > 0 )  // while-04
        {
             probable_position_of_half_r = position_of_reph - 1 ;
             var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )

             // trying to find non-maatra position left to current O (ie, half -r).

             while( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05
                {
                 probable_position_of_half_r = probable_position_of_half_r - 1 ;
                 charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

                }// end of while-05

             charecter_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_reph - probable_position_of_half_r ) ) ;
             new_replacement_string = "à¤°à¥" + charecter_to_be_replaced ; 
             charecter_to_be_replaced = charecter_to_be_replaced + "Â©" ;
             modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
             position_of_reph = modified_substring.indexOf( "Â©" ) ;
         }// end of while-04
    }//end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of legacy_to_unicode function