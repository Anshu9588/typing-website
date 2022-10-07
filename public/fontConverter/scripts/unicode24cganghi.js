
    
    
    function convert(){
    
 
    
    var array_one = new Array(
    "क़्","ख़्","ग़्","ज़्","ड़्","ढ़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़", //two-byte nuqta characters
    
    "ड़","ढ़", // "ड़ि","ढ़ि","क़ि","ख़ि","ग़ि","ज़ि","फ़ि",
    
    "ॐ","ऽ","।","॥","॰", 
    
    "ल्ल","ङ्म","स्र","त्न","प्त",
    "ङ्क","ङ्ख","ङ्ग","ङ्घ","ङ्क्त","ञ्च","क्च","ह्न","द्ब्र","ढ्ढ","छ्व",
    "ह्य","ह्ण","ह्ल","ह्व","झ्र","ट्ट","ट्ठ","ह्म्","ह्म","श्च","फ्र","क्र", // "क्र",
    "ख्र्","ख्न्","च्च्","ज्ज्",
    "त्र्","त्र","क्ष्","क्ष","ज्ञ्","ज्ञ","ष्ट्व","ह्र",  //"श्र्य","त्र्य",
    "न्न्","त्त्","त्त","श्र्","श्र","शृ",
    
    
    "ष्ट","ष्ठ","श्ल","श्व","स्त्र","क्क","ड्ड","ड्ढ","क्व","स्र","ञ्ज","द्ग","द्घ","द्द",
    
    "छ्र","ट्र","ड्र","ढ्र","्र",
    
    "द्ध","द्ब","द्भ","द्म","द्य","द्व","क्त","रु","रू","हृ","दृ","ठ्ठ",
    
    "कु","कू","कृ","के","कै","कँ","कं",
    "फु","फू","फे","फै","फँ","फं",
    
    "क़्","ख़्","ख़्","ग़्","ज़्","फ़्","क़","ख़","ख़","ग़","ज़","फ़",
    
    "क्","ख्","ग्","घ्",
    "क","ख","ग","घ","ङ",
      
    "च्","ज्","झ्","ञ्",
    "च","छ","ज","झ","ञ",
    
    "ट","ठ","ड","ढ","ण्","ण",
    
    "त्","थ्","ध्","न्",
    "त","थ","द","ध","न",
    
    "प्","फ्","ब्","भ्","म्",
    "प","फ","ब","भ","म",
    
    "य्","ल्","ळ्","व्",
    "य","र","ल","ळ","व",
    
    "श्","ष्","स्","ह्",
    "श","ष","स","ह",
    
    "्य","्न","्ल",  // "्रु","्रू",
    
    "औ","ओ","ऑ","आ","अ","ई","इ","उ","ऊ","ऐ","ए","ऋ","ॠ","ऌ", 
    
    "ॉ","ा","ी","ु","ू","ृ","े","ै","ो","ौ","ं","ँ","ः","ॅ",   //"ु","ू","े","े",
    "्","ँ","ं","़",
    
    "०","१","२","३","४","५","६","७","८","९"  )
    
    var array_two = new Array(
    
    "क़्","ख़्","ग़्","ज़्","ड़्","ढ़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़",  //one-byte nuqta characters
    
    "OÞX","PÞX",  // "dOÞX","dPÞX","d×I","d×J","d×¦f","d¬f","d×R",
    
    "Û","Ú","Ü","Ý","Ù",
    
    "n","o","p","}","~",
    "‚","ƒ","„","…","†","‡","ˆY","‰","Š","‹","Œ",
    "‘","’","“","”","–","˜","™","š","šf","›","RiY","IiY", // "œY",
    "¤","¥","©","«",
    "Â","Âf","Ã","Ãf","Ä","Äf","Å","Ï",  // "ß¹f","Â¹f",
    "Ö","Ø","Øf","ß","ßf","àÈ",
    
    
    "á","â","ã","ä","å","æY","ç","è","é","ê","ì","í","î","ï",
    
    "LÑ","MÑ","OÑ","PÑ","i",
    
    "ð","ñ","ò","ó","ô","õ","öY","÷Y","øY","ù","ú","ÿ",
    
    "IbY","IcY","IÈY","IZY","I`Y","IhY","IaY",
    "RbY","RcY","RZY","R`Y","RhY","RaY",
    
    "×¢","×£","£Þ","×¦","¬","×µ","×I","×J","JÞ","×¦f","¬f","×R",  
    
    "¢","£","¦","§",    
    "IY","J","¦f","§f","K",    
    
    "¨","ª","¬","Ó",
    "¨f","L","þ","Óf","®f",
    
    "MX","NX","OX","PX","¯","¯f",
    
    "°","±","²","³",
    "°f","±f","Q","²f","³f",
    
    "´","µ","¶","·","¸",
    "´f","RY","¶f","·f","¸f",
    
    "¹","»","¼","½",
    "¹f","SX","»f","T","U",
    
    "V","¿","À","Á",
    "Vf","¿f","Àf","WX",
    
    "ë","j","É",    //"fib","fic",
    
    "Aü","Aû","Afg","Af","A","BÊ","B","CX","DY","EZ","E","FY","GY","H", 
    
    "fg","f","e","b","c","È","Z","`","û","ü","a","h",":","g",   //"Æ","Ç","m","|",
    "Ð","Ò","Ô","×",
    
    "q","r","s","t","u","v","w","x","y","z" )
    
    
    //**************************************************************************************
    //  To be edited above this line
    //**************************************************************************************
    // The following two characters are to be replaced through proper checking of locations:
    //**************************************************************************************
    // "d",
    // "ि",
    //
    // "Ê",
    // "र्" (reph) 
    //**************************************************************************************
    
    var array_one_length = array_one.length ;
    var array_two_length = array_two.length ;
    
    if ( array_one_length == array_two_length ) 
      document.getElementById("outputText").value = "Both the arrays are of equal length"  ;  
      else document.getElementById("outputText").value = "Both the arrays are NOT of equal length"  ;  
    
      document.getElementById("outputText").value = "You have chosen SIMPLE TEXT in Unicode to convert into 4CGandhi. Conversion in progress.."  ;  
    
    var modified_substring = document.getElementById("inputText").value  ;
    
        Replace_Symbols( ) ;
    
      //  alert(" modified substring = "+modified_substring)
    
        var processed_text = modified_substring ;
    
     //   alert(" modified substring2 = "+modified_substring)
    
        document.getElementById("outputText").value = processed_text  ;
    
        
    
    //**************************************************
    //--------------------------------------------------
    //**************************************************
    
    
    
    function Replace_Symbols( )
       {
    // "d",
    // "ि",
    //
    // "Ê",
    // "र्" (reph) 
    
    
        // if string to be converted is non-blank then no need of any processing.
        if (modified_substring != "" )  
           {
            // code for replacing "ि" (chhotee ee kii maatraa) with "d" and correcting its position too.
            
            var position_of_f = modified_substring.indexOf( "ि" )  ;
             while ( position_of_f != -1 )  //while-02
               {
                var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
                modified_substring = modified_substring.replace( character_left_to_f + "ि" ,  "d" + character_left_to_f )  ;
    
                position_of_f = position_of_f - 1  ;
    
                while (( modified_substring.charAt( position_of_f - 1 ) == "्" )  &  ( position_of_f != 0  ) )
                   {
                    var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "्"  ;
                      modified_substring = modified_substring.replace( string_to_be_replaced + "d", "d" + string_to_be_replaced ) ;
    
                    position_of_f = position_of_f - 2  ;
                   }
                position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ; // search for f ahead of the current position.
    
               } // end of while-02 loop
               
     
       //************************************************************     
            // Eliminating "र्" and putting  "Ê"   at proper position for this.
            
    // before searching and replacing half-R,  replace 'tr' and 'shr' so that they  do not intrude with half-R search-and-replace activity.				
            modified_substring = modified_substring.replace( /श्र्/g  , 'ß' ) ;
            modified_substring = modified_substring.replace( /त्र्/g  , 'Â' ) ;
            
    
           set_of_matras = "ािीुूृेैोौं:ँॅ" 
    
    modified_substring += '  ' ;  // add two spaces after the string to avoid UNDEFINED char in the following code.
    
           var position_of_half_R = modified_substring.indexOf( "र्" ) ;
            while ( position_of_half_R > 0  )  // while-04
               {
                // "र्"  is two bytes long
                 if ( modified_substring.charAt( position_of_half_R + 3 ) != '्' ) 
                      var probable_position_of_Z = position_of_half_R + 3    
                
                    else { if ( modified_substring.charAt( position_of_half_R + 5 ) != '्' ) 
                              probable_position_of_Z = position_of_half_R + 5
                             else probable_position_of_Z = position_of_half_R + 7 ;				  
                          }
                
                var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 0 )
    
                // trying to find non-maatra position right to probable_position_of_Z .
    
                while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  
                   {
                    probable_position_of_Z = probable_position_of_Z + 1 ;
                    character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;
                   } // end of while-05
                   
                  
                string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 2 ))  ;
                modified_substring = modified_substring.replace( "र्" + string_to_be_replaced  ,  string_to_be_replaced + "Ê" ) ;
                position_of_half_R = modified_substring.indexOf( "र्" ) ;
               } // end of while-04
    
    
            modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;
    
    
    
            //substitute array_two elements in place of corresponding array_one elements
    
       //************************************************************     
            for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
               {
                idx = 0  ;  // index of the symbol being searched for replacement
    
                while (idx != -1 ) //whie-00
                   {
                    modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                    idx = modified_substring.indexOf( array_one[input_symbol_idx] )
                   } // end of while-00 loop
               } // end of for loop
    //***********************************************************************
    // shift the ikAr mAtrAs of nuqta characters in 4CGandhi
    //***********************************************************************
             modified_substring = modified_substring.replace( /OXd×/g , "dOÞX" ) ;
             modified_substring = modified_substring.replace( /PXd×/g , "dPÞX" ) ;
             modified_substring = modified_substring.replace( /IYd×/g , "d×IY" ) ;
             modified_substring = modified_substring.replace( /Jd×/g , "d×J" ) ;
             modified_substring = modified_substring.replace( /¦fd×/g , "d×¦f" ) ;
             modified_substring = modified_substring.replace( /þd×/g , "dþÞ" ) ;
             modified_substring = modified_substring.replace( /RYd×/g , "d×RY" ) ;
             modified_substring = modified_substring.replace( /ái/g , "¿MÑX" ) ;
             modified_substring = modified_substring.replace( /Êe/g , "eÊ" ) ;
             modified_substring = modified_substring.replace( /×R/g , "×RY" ) ;
             modified_substring = modified_substring.replace( /ä/g , "V½f" ) ;
             modified_substring = modified_substring.replace( /Êf/g , "fÊ" ) ;
             modified_substring = modified_substring.replace( /×Ie/g , "×IYe" ) ;
             modified_substring = modified_substring.replace( /ea/g , "eÔ" ) ;
             modified_substring = modified_substring.replace( /¬f/g , "þ" ) ;
             modified_substring = modified_substring.replace( /×I/g , "×IY" ) ;
             modified_substring = modified_substring.replace( /a/g , "Ô" ) ;
             modified_substring = modified_substring.replace( /é/g , "¢½f" ) ;
             modified_substring = modified_substring.replace( /×RYi/g , "RiÞY" ) ;
             modified_substring = modified_substring.replace( /n/g , "»»f" ) ;
             modified_substring = modified_substring.replace( /æY/g , "¢IY" ) ;
             modified_substring = modified_substring.replace( /øY´f¹fZ/g , "÷Y´fE" ) ; 
             modified_substring = modified_substring.replace( /VfbøYAf°f/g , "Vfb÷YAf°f" ) ;
             modified_substring = modified_substring.replace( /Vfb÷YAf°fe/g , "Vfb÷YAf°fe" ) ;
             modified_substring = modified_substring.replace( /Vfb÷Y/g , "VfbøY" ) ;
             
    //		in newspaper nukta used in urdu and farshi words are not in use
            modified_substring = modified_substring.replace( /×RY/g , "RY" ) ;
            modified_substring = modified_substring.replace( /×J/g , "J" ) ;
            modified_substring = modified_substring.replace( /×¦f/g , "¦f" ) ;
            modified_substring = modified_substring.replace( /×IY/g , "IY" ) ;
            modified_substring = modified_substring.replace( /¬/g , "ª" ) ;
    
            
            } // end of IF  statement  meant to  supress processing of  blank  string.
    
        } // end of the function  Replace_Symbols( )
    
      } // end of legacy_to_unicode  function