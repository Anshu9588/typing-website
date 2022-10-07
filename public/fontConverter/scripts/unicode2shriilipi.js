function convert_to_unicode()
{

var array_one = new Array(  'u' ,  'Âª' ,  '}' ,   'n' , 'p' ,  

'H' ,  'Â·' ,   'I' ,  'Â»' ,  'J' ,  'Â½' ,  'K' ,  

'M' ,  'Ã€' ,  'N' ,   'ÂµO' ,  'O' ,   'ÂµÃ' ,  'Ã' ,  'P' ,

'Q' ,  'R' ,   'Â¶S' ,  'S' ,   'Â¶T' ,   'T' ,   'U' ,  'ÃŠ' , 

'W' , 'Ã' ,  'V' ,  'Ã‹' ,  'Y',  'Ãœ' ,  'X' ,  'Z' ,  'Ã' ,

'\\' ,  'Ã¢' ,  '[' ,  'ÃŸ' ,  '^' ,   'Ã¤' ,  ']' ,   'Ã£' ,   '_'  ,  'Ã¥' ,


'`' ,   'a' ,  'c' ,  'Ã«',  'd' ,   'Ã¬',   

'e' ,  'Ã»' ,  'Ã­' ,  'f' ,  'Ã®' ,  'g' ,  'Ã±' ,  'h' ,  'j' ,  'Ãº' ,  'k' ,

'Ã”' ,  'Ã›' ,  'Ãš' ,  'Ã ' ,  'Ãž' , 'QÂ­' ,  'Âº$' ,  'ÃŒ' ,  'Ã' ,  'Ã•' ,  'l' ,  'ÃŽm' ,   'Â¸' ,   'â€ž' ,  'Ë†' ,  'Å“' ,  'Ã…' ,


'AmÂ¡' ,  'Am{' ,  'Am|' ,  'Am' ,  'A' ,  'BÂ©' ,  'B' , 'C' , 'D',   'E{',  'E' ,  'F' ,

'mÂ°' ,    'm{' ,    'm|' ,    '{' ,   '|' ,  'mÂ¡' ,   'mÂ¢' ,   'Â¡' ,   'Â¢' , 

'm' ,    'r' ,   's' ,  't' ,    'w' ,  'Ã¾' ,  'y' ,   'Â§' ,  'Â±',  'â€¢' ,  'Â¥' ,  'Â²' , 

'Ã‘' ,  'Â«' ,  'Ã©' ,  'Ãª' ,  '&' ,  '$' ,  '>' ,  'Âµ'   )

var array_two = new Array(  'Â©' ,  'Â©à¤‚' ,  '{Â©' ,  'o' ,  'o' , 

"à¤•",  'à¤•à¥â€Œ' , "à¤–",   'à¤–à¥â€Œ' ,  "à¤—" ,  'à¤—à¥' ,  'à¤˜' ,  

'à¤š',  'à¤šà¥â€Œ',  'à¤›' ,  'à¥›' ,  'à¤œ' ,  'à¥›à¥â€Œ' ,  'à¤œà¥â€Œ' ,  'à¤' ,

"à¤Ÿ",  "à¤ ",   'à¥œ' ,  "à¤¡",   'à¥' ,  'à¤¢' , "à¤£" , 'à¤£à¥' ,

"à¤¥",  'à¤¥à¥' ,  "à¤¤",  'à¤¤à¥' ,  "à¤§", 'à¤§à¥' ,  "à¤¦",  "à¤¨" ,  'à¤¨à¥' ,

"à¤«", 'à¤«à¥â€Œ' ,  "à¤ª", 'à¤ªà¥â€Œ' ,  "à¤­",  'à¤­à¥' ,  "à¤¬",  'à¤¬à¥â€Œ' ,  "à¤®" ,   'à¤®à¥' ,


"à¤¯",   "à¤°",   "à¤²",  'à¤²à¥â€Œ' ,   "à¤µ",   'à¤µà¥â€Œ' ,  

"à¤¶",  'à¤¶à¥' ,  'à¤¶à¥' ,  'à¤·' ,   'à¤·à¥â€Œ' ,  "à¤¸",  'à¤¸à¥', "à¤¹",  'à¤•à¥à¤·' ,  'à¤•à¥à¤·à¥' ,  'à¤œà¥à¤ž' ,

'à¤¦à¥à¤¦',  'à¤¦à¥à¤µ' , 'à¤¦à¥à¤¯' ,  'à¤ªà¥à¤°',  'à¤¨à¥à¤¨' ,  'à¤Ÿà¥à¤°' , 'à¤•à¥à¤¤' ,  'à¤¤à¥à¤°' ,  'à¤¦à¥à¤°',  'à¤¦à¥à¤§' ,  'à¤¶à¥à¤°' ,  'à¤¤à¥à¤¤' ,  'à¤•à¥à¤•' ,  'à¤²à¥à¤²' ,  'à¤¹à¥à¤µ' ,  'à¤¶à¥à¤µ' ,  'à¤Ÿà¥à¤Ÿ' ,


'à¤”' ,  'à¤“' , 'à¤“à¤‚' ,  'à¤†' ,  'à¤…' ,  'à¤ˆ' ,  'à¤‡' ,   'à¤‰' ,  'à¤Š' ,  'à¤' ,  'à¤' ,  'à¤‹' ,

'à¥‰' , "à¥‹",  "à¥‹à¤‚",  "à¥‡",  "à¥‡à¤‚",  "à¥Œ",  "à¥Œà¤‚",   "à¥ˆ",  'à¥ˆà¤‚' ,  

"à¤¾",  "à¥€",  "à¥€",  "à¥€à¤‚",  "à¥",  'à¥' ,  "à¥‚",  'à¤‚' ,  'à¤' ,  'à¤ƒ' ,  'à¥ƒ' , 'à¥â€Œ' ,  

'à¤¦à¥ƒ' ,  'à¥à¤°' ,  'à¤°à¥' ,  'à¤°à¥‚' ,  'à¥¤' ,  ''  ,  '' ,  ''   )


var array_one_length = array_one.length ;

    document.getElementById("legacy_text").value = "You have chosen SIMPLE TEXT  in ShreeLipi font to convert into Unicode. /n Conversion in progress.."  ;  

      var modified_substring = document.getElementById("unicode_text").value  ;


//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("unicode_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 10000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("unicode_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      modified_substring = document.getElementById("unicode_text").value.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;

//  Breaking part code over

      document.getElementById("legacy_text").value = processed_text  ;

    }
  

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




//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------


function Convert_to_ShreeLipi()
{

var array_one = new Array(  'u' ,  'Âª' ,  '}' ,   'n' , 'p' ,  

'H' ,  'Â·' ,   'I' ,  'Â»' ,  'J' ,  'Â½' ,  'K' ,  

'M' ,  'Ã€' ,  'N' ,   'ÂµO' ,  'O' ,   'ÂµÃ' ,  'Ã' ,  'P' ,

'Q' ,  'R' ,   'Â¶S' ,  'S' ,   'Â¶T' ,   'T' ,   'U' ,  'ÃŠ' , 

'W' , 'Ã' ,  'V' ,  'Ã‹' ,  'Y',  'Ãœ' ,  'X' ,  'Z' ,  'Ã' ,

'\\' ,  'Ã¢' ,  '[' ,  'ÃŸ' ,  '^' ,   'Ã¤' ,  ']' ,   'Ã£' ,   '_'  ,  'Ã¥' ,


'`' ,   'a' ,  'c' ,  'Ã«',  'd' ,   'Ã¬',   

'e' ,  'Ã»' ,  'Ã­' ,  'f' ,  'Ã®' ,  'g' ,  'Ã±' ,  'h' ,  'j' ,  'Ãº' ,  'k' ,

'Ã”' ,  'Ã›' ,  'Ãš' ,  'Ã ' ,  'Ãž' , 'QÂ­' ,  'Âº$' ,  'ÃŒ' ,  'Ã' ,  'Ã•' ,  'l' ,  'ÃŽm' ,   'Â¸' ,   'â€ž' ,  'Ë†' ,  'Å“' ,  'Ã…' ,


'AmÂ¡' ,  'Am{' ,  'Am|' ,  'Am' ,  'A' ,  'BÂ©' ,  'B' , 'C' , 'D',   'E{',  'E' ,  'F' ,

'mÂ°' ,    'm{' ,    'm|' ,    '{' ,   '|' ,  'mÂ¡' ,   'mÂ¢' ,   'Â¡' ,   'Â¢' , 

'm' ,    'r' ,   's' ,  't' ,    'w' ,  'Ã¾' ,  'y' ,   'Â§' ,  'Â±',  'â€¢' ,  'Â¥' ,  'Â²' , 

'Ã‘' ,  'Â«' ,  'Ã©' ,  'Ãª' ,  '&'    //,  '$' ,  '>' ,  'Âµ'  
 )

var array_two = new Array(  'Â©' ,  'Â©à¤‚' ,  '{Â©' ,  'o' ,  'o' , 

"à¤•",  'à¤•à¥â€Œ' , "à¤–",   'à¤–à¥â€Œ' ,  "à¤—" ,  'à¤—à¥' ,  'à¤˜' ,  

'à¤š',  'à¤šà¥â€Œ',  'à¤›' ,  'à¥›' ,  'à¤œ' ,  'à¥›à¥â€Œ' ,  'à¤œà¥â€Œ' ,  'à¤' ,

"à¤Ÿ",  "à¤ ",   'à¥œ' ,  "à¤¡",   'à¥' ,  'à¤¢' , "à¤£" , 'à¤£à¥' ,

"à¤¥",  'à¤¥à¥' ,  "à¤¤",  'à¤¤à¥' ,  "à¤§", 'à¤§à¥' ,  "à¤¦",  "à¤¨" ,  'à¤¨à¥' ,

"à¤«", 'à¤«à¥â€Œ' ,  "à¤ª", 'à¤ªà¥â€Œ' ,  "à¤­",  'à¤­à¥' ,  "à¤¬",  'à¤¬à¥â€Œ' ,  "à¤®" ,   'à¤®à¥' ,


"à¤¯",   "à¤°",   "à¤²",  'à¤²à¥â€Œ' ,   "à¤µ",   'à¤µà¥â€Œ' ,  

"à¤¶",  'à¤¶à¥' ,  'à¤¶à¥' ,  'à¤·' ,   'à¤·à¥â€Œ' ,  "à¤¸",  'à¤¸à¥', "à¤¹",  'à¤•à¥à¤·' ,  'à¤•à¥à¤·à¥' ,  'à¤œà¥à¤ž' ,

'à¤¦à¥à¤¦',  'à¤¦à¥à¤µ' , 'à¤¦à¥à¤¯' ,  'à¤ªà¥à¤°',  'à¤¨à¥à¤¨' ,  'à¤Ÿà¥à¤°' , 'à¤•à¥à¤¤' ,  'à¤¤à¥à¤°' ,  'à¤¦à¥à¤°',  'à¤¦à¥à¤§' ,  'à¤¶à¥à¤°' ,  'à¤¤à¥à¤¤' ,  'à¤•à¥à¤•' ,  'à¤²à¥à¤²' ,  'à¤¹à¥à¤µ' ,  'à¤¶à¥à¤µ' ,  'à¤Ÿà¥à¤Ÿ' ,


'à¤”' ,  'à¤“' , 'à¤“à¤‚' ,  'à¤†' ,  'à¤…' ,  'à¤ˆ' ,  'à¤‡' ,   'à¤‰' ,  'à¤Š' ,  'à¤' ,  'à¤' ,  'à¤‹' ,

'à¥‰' , "à¥‹",  "à¥‹à¤‚",  "à¥‡",  "à¥‡à¤‚",  "à¥Œ",  "à¥Œà¤‚",   "à¥ˆ",  'à¥ˆà¤‚' ,  

"à¤¾",  "à¥€",  "à¥€",  "à¥€à¤‚",  "à¥",  'à¥' ,  "à¥‚",  'à¤‚' ,  'à¤' ,  'à¤ƒ' ,  'à¥ƒ' , 'à¥â€Œ' ,  

'à¤¦à¥ƒ' ,  'à¥à¤°' ,  'à¤°à¥' ,  'à¤°à¥‚' ,  'à¥¤'    // ,  ''  ,  '' ,  ''  
 )

var array_one_length = array_one.length ;
var array_two_length = array_two.length ;


var modified_substring = document.getElementById("legacy_text").value  ;


//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("legacy_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 10000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("legacy_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      modified_substring = document.getElementById("legacy_text").value.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;

      document.getElementById("unicode_text").value = processed_text  ;

    }
  	
	
	
 //--------------------------------------------------

 function Replace_Symbols( )
    {	
	// code for replacing "'à¤¿à¤‚'" (chhotee ee kii maatraa + anuswaar) with "q" and correcting its position too.
    modified_substring = '  ' + modified_substring  ; // add two spaces to avoid error while searching left    
        var position_of_f = modified_substring.indexOf( 'à¤¿à¤‚' )  ;
         while ( position_of_f != -1 )  //while-02
           {
		   modified_substring = modified_substring.replace( 'à¤¿à¤‚' , 'q' ) ;
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "q" ,  "q" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "à¥" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "à¥"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "q", "q" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /à¤¿à¤‚/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } // end of while-02 loop
	
//----------------------	
	
// code for replacing "à¤¿" (chhotee ee kii maatraa) with "o" and correcting its position too.
        
        var position_of_f = modified_substring.indexOf( "à¤¿" )  ;
         while ( position_of_f != -1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "à¤¿" ,  "o" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "à¥" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "à¥"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "o", "o" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /à¤¿/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } // end of while-02 loop
 
//************************************************************     
        // Eliminating "à¤°à¥" and putting  "Â©"   at proper position for this.

       set_of_matras = "à¤¾à¤¿à¥€à¥à¥‚à¥ƒà¥‡à¥ˆà¥‹à¥Œà¤‚:à¤à¥…" 

modified_substring += '  '    ;  // add two spaces after the string to avoid UNDEFINED char in the following code.

       var position_of_half_R = modified_substring.indexOf( "à¤°à¥" ) ;
        while ( position_of_half_R > 0  )  // while-04
           {
            // "à¤°à¥"  is two bytes long
			if ( modified_substring.charAt( position_of_half_R + 3 ) != 'à¥' )   var probable_position_of_Z = position_of_half_R + 2     
        else  var probable_position_of_Z = position_of_half_R + 4 ; 

            var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 )

            // trying to find non-maatra position right to probable_position_of_Z .

            while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  
               {
                probable_position_of_Z = probable_position_of_Z + 1 ;
                character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;
               } // end of while-05

            string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 1 ))  ;
            modified_substring = modified_substring.replace( "à¤°à¥" + string_to_be_replaced  ,  string_to_be_replaced + "Â©" ) ;
            position_of_half_R = modified_substring.indexOf( "à¤°à¥" ) ;
           } // end of while-04


        modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;
	
	
// ------------------------------------------	
	
	
	
//Now substitute array_one elements in place of corresponding array_two elements

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for (input_symbol_idx = array_two_length - 1 ;   input_symbol_idx > 0 ;    input_symbol_idx-- )
            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_two[ input_symbol_idx ] , array_one[input_symbol_idx] )
                 indx = modified_substring.indexOf( array_two[input_symbol_idx] )

                } // end of while-00 loop
            } // end of for loop
			
		 
    }//end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of legacy_to_unicode function