function convert()
{
var array_one = new Array(
"ज़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",    // two-byte nukta varNas
"‘","’","“","”","–","ं","ऑ",

"त्र्","श्र्",
"क्र","ग्र","घ्र",
"छ्र","ट्र","ड्र","ढ्र",
"त्र","द्र","ध्र",
"प्र","फ्र","ब्र","भ्र","म्र",
"व्र","श्र","स्र","ह्र",
"ष्ट्र", "रु","रू",

"क्ष्","क्ष","ज्ञ","् ","्,","्;",
                     
"क़","ख़","ग़","ज़्","ज़","ड़","ढ़","फ़्","फ़","य़","ऱ","ऩ",      // one-byte nukta varNas

"क्च","ष्ट","ष्ठ","श्व","॥","ढ्ढ","छ्व", //"स्न", creates problem in कार्त्स्न्य
"हृ","क्क","क्त","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","ट्ट","ट्ठ",

"क्व","ड्ड","ड्ढ","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म","ह्म्","ह्य","ह्ल","ह्व",
 
"त्त","त्त्","प्त","ञ्च",  //"त्न",
"ल्ल","ष्ट्व","ङ्क्ष",  //"ख्न","द्ब्र","ख्र",

"ह्न","ह्व","द्द",  
"।","्र",
"शृ","शॄ","कॢ","ह्ण",

"ओ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",

"के","कै","फे","फै",  //"कं","फं",

"क्","क", "ख्","ख","ग्","ग","घ्","घ","ङ",
"च्च्","च्","च","छ","ज्ज्","ज्","ज","झ्","झ","ञ्","ञ",

"ट","ठ","ड","ढ","ण्","ण",
"त्","त","थ्","थ","द","ध्","ध","न्न्","न्न","न्","न",

"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",
"य्","य","र","ल्","ल","ळ","व्","व",
"श्","श","ष्","ष","स्","स","ह्","ह",
"्य","x",

"ॉ","ा","ी","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",
"ं","ं","ँ","ः","़", "ॅ","ऽ","्",

"०","१","२","३","४","५","६","७","८","९",
"0","1","2","3","4","5","6","7","8","9")

var array_two = new Array(
"ज़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",      // one-byte nukta varNas
"Ò","Ó","\"","\"","-","´","¥æò",

"˜","Ÿ",
"R¤","»ý","ƒæý",
"Àþ","Åþ","Çþ","Éþ",
"˜æ","Îý","Ïý",
"Âý","È¤ý","Õý","Öý","×ý",
"ßý","Ÿæ","d","O",
"cÅþ","L¤","M¤",

"ÿ","ÿæ","™æ","÷ ","÷,","÷;",
"·¸¤", "¹¸", "»¸", "Ê", "Á¸","Ç¸", "É¸", "¸U","È¸¤","Ø¸","Ú¸","Ù¸", 
// "·¸¤", "¹¸", "»¸", "Á¸","Ç¸", "É¸", "¸U","È¸¤","Ø¸","Ú¸","Ù¸", 

"B¤","C","D","E","H","I","J", //"F",creates problem in कार्त्स्न्य
"N","P¤","Q¤","T","V","W","X","Y","^","_",

"`¤","a","b","e","f","g","h","i","j","k","l","m","n","p","q","ræ","r","s","t","u",

"žæ","ž","#","@", //"%",
"„","¦","¨",      // "¯","µ","º",

"q","u","g",    
"Ð","ý",
"oë","oì","•í","ö",

"¥ô","¥õ","¥æ","¥","§Z","§ü","§","©","ª¤","«¤","¬¤","­","°ð","°",

"·Ô¤","·ñ¤","ÈÔ¤","Èñ¤",   // "·´¤","È´¤",

"€U","·¤","","¹","‚","»","ƒ","ƒæ","¾", 
"“","‘","¿","À","”","’","Á","Û","Ûæ","†","†æ",

"ÅU","Æ","Ç","É","‡","‡æ",
"ˆ","Ì","‰","Í","Î","Š","Ï","ó","óæ","‹","Ù",

"Œ","Â","U","È¤","Ž","Õ","","Ö","","×",
"Ä","Ø","ÚU","Ë","Ü","Ý","Ã","ß",
"à","àæ","c","á","S","â","±","ã",
"K","&",
 
"æò","æ","è","é","ê","ë","ì","í","ð","ñ","ô","õ",
"¢","´","¡","Ñ","¸","ò","ù","÷",

"0","1","2","3","4","5","6","7","8","9",
"®","v","w","x","y","z","{","|","}","~")
  
//************************************************************
//Put "Enter chunk size:" line before "<textarea name= ..." if required to be used.    
//************************************************************
//Enter chunk size: <input type="text" name="chunksize" value="6000" size="7" maxsize="7" style="text-align:right"><br/><br/>
//************************************************************
// The following two characters are to be replaced through proper checking of locations:

// "र्" (reph) 
// "ü" )

// "ि"  
// "ç" )


    var array_one_length = array_one.length ;

    var modified_substring = document.getElementById("inputText").value  ;

    Replace_Symbols( ) ;

    processed_text = modified_substring ;

    document.getElementById("outputText").value = processed_text  ;


//**************************************************

function Replace_Symbols( )
   {

    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {

// first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

// modified_substring = modified_substring.replace ( /क़/ , "क़" )  ; 
// modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
// modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
// modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
// modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
// modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
// modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
// modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
// modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
// modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


        // code for replacing "ि" (chhotee ee kii maatraa) with "i"  and correcting its position too.
        
        var position_of_f = modified_substring.indexOf( "ि" )  ;
         while ( position_of_f != -1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ि" ,  "ç" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "्" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "्"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "ç", "ç" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } // end of while-02 loop
   //************************************************************     
   //     modified_substring = modified_substring.replace( /fर्/g , "£"  )  ;
   //************************************************************     
        // Eliminating "र्" and putting  Z  at proper position for this.

       set_of_matras = "ािीुूृेैोौं:ँॅ" 

       modified_substring += '  '    ;  // add two spaces after the string to avoid UNDEFINED char in the following code.
  
//    modified_substring = modified_substring.replace ( /-/g , "¹" )  ; 
      modified_substring = modified_substring.replace ( /श्र्/g , "Ÿ" )  ; 
      modified_substring = modified_substring.replace ( /त्र्य/g , "˜Ø" )  ; 

       var space = " "
       var position_of_half_R = modified_substring.indexOf( "र्" ) ;

 //  alert(" 21. position_of_half_R = " + position_of_half_R);

//************************************************************************************
   while ( position_of_half_R > 0  )  // while-03
   {
    // "र्"  is two bytes long
    var probable_position_of_Z = position_of_half_R + 2   ;  
    var character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z )

//  alert(" 3. probable_position_of_Z = "+probable_position_of_Z );
//  alert(" 4. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );

    // trying to find non-maatra position right to probable_position_of_Z .

    while( set_of_matras.match( character_at_probable_position_of_Z ) != null ) // while-04 
    {
     probable_position_of_Z = probable_position_of_Z + 1 ;
     character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;

//   alert(" 5. probable_position_of_Z = "+probable_position_of_Z );
//   alert(" 6. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );
    } // end of while-04
//************************************************************
// check if the next character is a halant
//************************************************************
    var right_to_position_of_Z = probable_position_of_Z + 1 ;
//  alert(" 7. right_to_position_of_Z = "+right_to_position_of_Z );

    if (right_to_position_of_Z > 0)  // if-03
    { var character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )
//    alert(" 8. character_right_to_position_of_Z = "+character_right_to_position_of_Z );

      while ("्".match( character_right_to_position_of_Z ) != null ) // while-05
      {  
//       halant found, move to next character
         probable_position_of_Z = right_to_position_of_Z + 1 ;
         character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;

//       alert(" 9. probable_position_of_Z = "+probable_position_of_Z );
//       alert("10. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );
       
         right_to_position_of_Z = probable_position_of_Z + 1 ;
         character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )

//       alert("11. right_to_position_of_Z = "+right_to_position_of_Z );
//       alert("12. character_right_to_position_of_Z = "+character_right_to_position_of_Z );
      } // end of while-05
   } // end of if-03
//************************************************************

       string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2,(probable_position_of_Z - position_of_half_R)-1) ;
//************************************************************
//     check if character_right_to_position_of_Z is a space
//       if (space.match(character_right_to_position_of_Z) != null) 
//       {
//          string_to_be_replaced = string_to_be_replaced.substr(0,string_to_be_replaced.length - 1)
//        alert("13. string_to_be_replaced = "+string_to_be_replaced );
//        alert("14. string_to_be_replaced.length ="+string_to_be_replaced.length);
//       }
       modified_substring = modified_substring.replace( "र्" + string_to_be_replaced, string_to_be_replaced + "ü" ) ;

//     alert("15. string_to_be_replaced = "+string_to_be_replaced );
//     alert("16. modified_substring = "+modified_substring );
       position_of_half_R = modified_substring.indexOf( "र्" ) ;
//      alert("17. position_of_half_R = "+position_of_half_R )

   } // end of while-03
//***********************************************************


modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;


        //substitute array_two elements in place of corresponding array_one elements

        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.
      
       modified_substring = modified_substring.replace ( /üè/g , "èü" ) 
       modified_substring = modified_substring.replace ( /üô/g , "ôü" ) 
       modified_substring = modified_substring.replace ( /üæ/g , "æü" ) 
       modified_substring = modified_substring.replace ( /ü´/g , "Z" ) 
       modified_substring = modified_substring.replace ( /÷ ü/g , "÷ü" ) 

   //    modified_substring = modified_substring.replace ( /ki,/g , "ik," ) 
   //    modified_substring = modified_substring.replace ( /Ki,/g , "iÓ" ) 
   //    modified_substring = modified_substring.replace ( /gai,/g , "iga," ) 
   //    modified_substring = modified_substring.replace ( /jai,/g , "ija," ) 
       modified_substring = modified_substring.replace ( /Çç¸/g , "çÇ¸" ) 
       modified_substring = modified_substring.replace ( /Éç¸/g , "çÉ¸" ) 
       modified_substring = modified_substring.replace ( /È¤ç¸/g , "çÈ¸¤" ) 

    } // end of the function  Replace_Symbols( )

  } // end of convert_to_chanakya function