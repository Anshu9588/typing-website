

class TypingApp {
  #typeContainer = document.querySelector(`.type-input-container`);
  WPMvalue = document.querySelector(`#wpmValue`);
  #accuracyValue = document.querySelector(`#accuracyValue`);
  WordContainer;
  i = 0;
  keypress = 0;
  totalWords = 0;
  correctWords = 0;
  WPM;
  GWP;
  Accurac;
  user;
  lang;

  constructor() {
    this.languageType()
    document.querySelector(`form`).addEventListener(`submit`, this.startTyping.bind(this))
  }
  startTyping() {
    // display typing page
    document.querySelector(`.form`).style.display = "none";
    
    document.querySelector(`.result`).style.display = "none";
    document.querySelector(`.resultContainer`).style.display = "block";
    // load user data
    const data = this.userData()
    // display name
    // load text for type
    this.getData(data)
    document.querySelector(`.welcome-name`).textContent = `Welcome ${data.name}`
    ////AccuracyColor
    this.wpm()
    this.grossWPM()
    this.AccuracyColor(data)
  //  this.usertext()
    //net Wpm
    
    /// timer
    this.timer(data.time)
    
   
  }
  userData() {

    const name = document.querySelector(`#name`).value;
    this.user = name
    const custumTimeInput = document.querySelector(`#timer-Value`).value;
    const custumPassageInput = document.querySelector(`#passage-Value`).value;
    const time =
      custumTimeInput === ""
        ? document.querySelector(`#time`).value
        : custumTimeInput;
//passage
    const passage =
      custumPassageInput === ""
        ? document.querySelector(`#passage`).value
        : custumPassageInput;
    const wordlimit = document.querySelector(`#wordlimit-value`).value;

    const valueFunction = function (elClass) {
      let value;
      const val = document
        .querySelector(`.${elClass}`)
        .querySelectorAll(`.btn`)
        .forEach(el => {
          if (el.checked) value = el.value;
        });
      return value;
    };

    const highliter = valueFunction(`highliter-value`);
    const sound = valueFunction(`sound-value`);
    const btnBackSpace = valueFunction(`backSpace-value`)
    const userDetails = { name, passage, time, wordlimit, sound, highliter,btnBackSpace }
    return userDetails
  }

  
  
  languageType (){
   this.lng = window.location.href.slice(-2)
  }
  getData(userdata) {
    const {passage,wordlimit}=userdata;
const hindi =['मनुष्य को अपनी अनेक तरह की आवश्यकताओं के लिए श्रम करना पड़ता है। श्रम के उपरांत थकान होना स्वाभाविक है। इसके अलावा जीवन संघर्ष और चिंताओं से परेशान होने पर वह इन्हें भूलना चाहता है और इनसे मुक्ति पाने का उपाय खोजता है और वह मनोरंजन का सहारा लेता है। मनोरंज से थके हुए मन-मस्तिष्क को सहारा मिलता है, एक नई स्फूर्ति मिलती है और कुछ पल के लिए व्यक्ति थकान एवं चिंता को भूल जाता है। मनोरंजन की आवश्यकता और उसका महत्त्व – आदिम काल से ही मनुष्य को मनोरंजन की आवश्यकता रही है। जीवन संघर्ष से थका मानव ऐसा साधन ढूँढ़ना चाहता है जिससे उसका तन-मन दोनों ही प्रफुल्लित हो जाए और वह नव स्फूर्ति से भरकर कार्य में लग सके। वास्तव में मनोरंजन के बिना जीवन नीरस हो जाता है। ऐसी स्थिति में काम में उसका मन नहीं लगता है और न व्यक्ति को कार्य में वांछित सफलता मिलती है। ऐसे में मनोरंजन की आवश्यकता असंदिग्ध हो जाती है। मनोरंजन की आवश्यकता और उसका महत्त्व – आदिम काल से ही मनुष्य को मनोरंजन की आवश्यकता रही है। जीवन संघर्ष से थका मानव ऐसा साधन ढूँढ़ना चाहता है जिससे उसका तन-मन दोनों ही प्रफुल्लित हो जाए और वह नव स्फूर्ति से भरकर कार्य में लग सके। वास्तव में मनोरंजन के बिना जीवन नीरस हो जाता है। ऐसी स्थिति में काम में उसका मन नहीं लगता है और न व्यक्ति को कार्य में वांछित सफलता मिलती है। ऐसे में मनोरंजन की आवश्यकता असंदिग्ध हो जाती है। आधुनिक काल के मनोरंजन के साधन – सभ्यता के विकास एवं विज्ञान की अद्भुत खोजों के कारण मनोरंजन का क्षेत्र भी अछूता न रह सका। प्राचीन काल की नौटंकी, नाच-गान की अन्य विधाओं का उत्कृष्ट रूप हमारे सामने आया। इससे नाटक के मंचन की व्यवस्था एवं प्रस्तुति में बदलाव के कारण नाटकों का आकर्षण बढ़ गया। पार्श्वगायन के कारण अब नाटक भी अपना मौलिक रूप कायम नहीं रख सके पर दर्शकों को आकर्षित करने में नाटक सफल हैं। लोग थियेटरों में इनसे भरपूर मनोरंजन करते हैं। सिनेमा आधुनिक काल का सर्वाधिक सशक्त और लोकप्रिय मनोरंजन का साधन है। यह हर आयु-वर्ग के लोगों की पहली पसंद है। यह सस्ता और सर्वसुलभ होने के अलावा ऐसा साधन है जो काल्पनिक घटनाओं को वास्तविक रूप में चमत्कारिक ढंग से प्रस्तुत करता है जिसका जादू-सा असर हमारे मन-मस्तिष्क पर छा जाता है और हम एक अलग दुनिया में खो जाते हैं। इस पर दिखाई जाने वाली फ़िल्में हमें कल्पनालोक में ले जाती हैं।',
'विज्ञानं ने मनुष्य को एक से बढ़कर एक अद्भुत उपकरण प्रदान किए हैं। इन्हीं अद्भुत उपकरणों में एक है दूरदर्शन। दूरदर्शन ऐसा अद्भुत उपकरण है जिसे कुछ समय पहले कल्पना की वस्तु समझा जाता था। यह आधुनिक युग में मनोरंजन के साथसाथ सूचनाओं की प्राप्ति का महत्त्वपूर्ण साधन भी है। पहले इसका प्रयोग महानगरों के संपन्न घरों तक सीमित था, परंतु वर्तमान में इसकी पहुँच शहर और गाँव के घर-घर तक हो गई है। दूरदर्शन मनोरंजन एवं ज्ञानवर्धन का उत्तम साधन है। आज यह हर घर की आवश्यकता बन गया है। उपग्रह संबंधी प्रसारण की सुविधा के कारण इस पर कार्यक्रमों की भरमार हो गई है। कभी मात्र दो चैनल तक सीमित रहने वाले दूरदर्शन पर आज अनेकानेक चैनल हो गए हैं। बस रिमोट कंट्रोल उठाकर अपना मनपसंद चैनल लगाने और रुचि के अनुसार कार्यक्रम देखने की देर रहती है। आज दूरदर्शन पर फ़िल्म, धारावाहिक, समाचार, गीत-संगीत, लोकगीत, लोकनृत्य, वार्ता, खेलों के प्रसारण, बाजार भाव, मौसम का हाल, विभिन्न शैक्षिक कार्यक्रम तथा हिंदी-अंग्रेजी के अलावा क्षेत्रीय भाषाओं में प्रसारण की सुविधा के कारण यह महिलाओं, युवाओं और हर आयुवर्ग के लोगों में लोकप्रिय है। अपनी उपयोगिता के कारण दूरदर्शन आज विलसिता की वस्तु न होकर एक आवश्यकता बन गया है। बच्चेबूढ़े, युवा-प्रौढ़ और महिलाएँ इसे समान रूप से पसंद करती हैं। इस पर प्रसारित ‘रामायण’ और महाभारत जैसे कार्यक्रमों ने इसे जनमानस तक पहुँचा दिया। उस समय लोग इन कार्यक्रमों के प्रसारण के पूर्व ही अपना काम समाप्त या बंद कर इसके सामने आ बैठते थे। गाँवों और छोटे शहरों में सड़कें सुनसान हो जाती थीं। आज भी विभिन्न देशों का जब भारत के साथ क्रिकेट मैच होता है तो इसका असर जनमानस पर देखा जा सकता है। लोग सब कुछ भूलकर ही दूरदर्शन से चिपक जाते हैं और बच्चे पढ़ना भूल जाते हैं। आज भी महिलाएँ चाय बनाने जैसे छोटे-छोटे काम तभी निबटाती हैं जब धारावाहिक के बीच विज्ञापन आता है। दूरदर्शन पर प्रसारित समाचार ताज़ी और विश्व के किसी कोने में घट रही घटनाओं के चित्रों के साथ प्रसारित की जाती है जिससे इनकी विश्वसनीयता और भी बढ़ जाती है। इनसे हम दुनिया का हाल जान पाते हैं तो दूसरी ओर कल्पनातीत स्थानों, प्राणियों, घाटियों, वादियों, पहाड़ की चोटियों जैसे दुर्गम स्थानों का दर्शन हमें रोमांचित कर जाता है। इस तरह जिन स्थानों को हम पर्यटन के माध्यम से साक्षात नहीं देख पाते हैं या जिन्हें देखने के लिए न हमारी जेब अनुमति देती है और न हमारे पास समय है, को साक्षात हमारी आँखों के सामने प्रस्तुत कर देते हैं।',
'मानव जीवन के चार पुरुषार्थ माने जाते हैं। ये हैं-धर्म अर्थ, काम और मोक्ष। इन्हें पाने का साधन है- स्वास्थ्य। अर्थात् यदि मनुष्य का जीवन नीरोग है तभी इन पुरुषार्थों के माध्यम से जीवन को सफल बनाया जा सकता है। रोगी और अस्वस्थ व्यक्ति न तो धर्मचिंतन कर सकता है और न उद्यम करके धनोपार्जन कर सकता है, न वह काम की प्राप्ति कर सकता है और न मोक्ष की प्राप्ति। अतः उत्तम स्वास्थ्य की ज़रूरत निस्संदेह है और उत्तम स्वास्थ्य पाने का सर्वोत्तम साधन हैव्यायाम। वास्तव में व्यायाम स्वास्थ्य का मूलमंत्र है। व्यायाम के लाभ – उत्तम स्वास्थ्य के लिए संतुलित पौष्टिक भोजन शुद्ध जलवायु, संयमित जीवन, स्वच्छता आदि आवश्यक है, परंतु इनमें सर्वोपरि है-व्यायाम। व्यायाम के अभाव में पौष्टिक भोजन पूरी तरह से प्रभावी नहीं हो पाता है। व्यायाम करने का सर्वोत्तम समय प्रातः काल है। इस समय पूरब की लालिमा शरीर में नवोत्साह भर देती है। इससे मन प्रफुल्लित हो जाता है। इस समय बहने वाली शीतल मंद हवा चित्त को प्रसन्न कर देती है और शरीर को ऊर्जा से भर देती है। पक्षियों का कलख कुछ-कहकर हमें व्यायाम करने की प्रेरणा देता हुआ प्रतीत होता है। इस समय शौच आदि से निवृत्त होकर बिना कुछ खाए व्यायाम करना चाहिए। ऋतु और मौसम को ध्यान में रखकर शरीर पर सरसों के तेल की मालिश व्यायाम से पूर्व करना अच्छा रहता है। दोपहर या तेज़ धूप में व्यायाम से बचना चाहिए। यदि किसी कारण सवेरे समय न मिले तो शाम को व्यायाम करना चाहिए।',
'इण्टरनेट का सामान्य अर्थ है–’सूचना–भण्डारों को सर्वसुलभ बनाने वाली तकनीक।’ कम्प्यूटर के प्रसार के साथ–साथ इण्टरनेट का भी विस्तार होता जा रहा है। इण्टरनेट ने ‘विश्वग्राम’ की कल्पना को साकार करने में महत्वपूर्ण योगदान दिया है। घर बैठे ज्ञान–विज्ञान सम्बन्धी सूचना–भण्डार से जुड़ जाना, इण्टरनेट ने ही सम्भव बनाया है। यह एक तरह से विश्वकोश बनता जा रहा है। सारे संसार में स्थित टेलीफोन प्रणाली अथवा उपग्रह संचार–व्यवस्था की सहायता से एक–दूसरे से जुड़े कम्प्यूटरों का नेटवर्क ही इण्टरनेट है। इस नेटवर्क से अपने कम्प्यूटर को सम्बद्ध करके कोई भी व्यक्ति नेटवर्क से जुड़े अन्य कम्प्य में संग्रह की गई जानकारी से परिचित हो सकता है। इस उपलब्ध सामग्री को संक्षेप में w.w.w. (वर्ल्ड वाइड वेव) कहा जाता है। इण्टरनेट से जुड़ने वाले व्यक्ति, विभाग या संस्थान अपनी–अपनी वेबसाइट स्थापित करते हैं। वेबसाइट में व्यक्ति, संस्थान या विषय से सम्बन्धित सम्पूर्ण जानकारी उपलब्ध रहती है। नेट से जुड़े कम्प्यूटर में निहित सामग्री को ‘होम पेज’ कहा जाता है। इण्टरनेट से जुड़ने वाले व्यक्ति, विभाग या संस्थान अपनी–अपनी वेबसाइट स्थापित करते हैं। वेबसाइट में व्यक्ति, संस्थान या विषय से सम्बन्धित सम्पूर्ण जानकारी उपलब्ध रहती है। नेट से जुड़े कम्प्यूटर में निहित सामग्री को ‘होम पेज’ कहा जाता है।टेली–कान्फ्रेंसिंग (दूर–विमर्श) द्वारा वैज्ञानिक परस्पर विचार–विमर्श कर सकते हैं, चिकित्सक रोगियों से सम्पर्क करके उचित परामर्श दे सकते हैं। ई–मेल, टेली–बैंकिंग, हवाई और रेल–यात्रा के लिए अग्रिम टिकिट–खरीद, विभिन्न बिलों का भुगतान, ई–मार्केटिंग इत्यादि नई–नई सुविधाएँ इण्टरनेट द्वारा उपलब्ध कराई जा रही हैं। इस प्रकार दिन–प्रतिदिन इण्टरनेट हमारे नित्य–जीवन का अत्यन्त उपयोगी अंग बनता जा रहा है। इण्टरनेट ने जहाँ मानव की सुख–सुविधा, ज्ञान–पिपासा तथा मनोरंजन के साधन–सुलभ बनाये हैं, वहीं इसके दुरुपयोग के प्रसंग भी सामने आ रहे हैं। अब नगरों और कस्बों में स्थान–स्थान पर ‘इण्टरनेट ढाबे’ (साइबर कैफे) खुल चुके हैं। जहाँ युवा–वर्ग ज्ञानवर्धन के लिए कम बल्कि अश्लील मनोरंजन के लिए अधिक जुटा रहता है। किसी देश की महत्वपूर्ण वेबसाइट के कोड का विच्छेदन करके, उसकी गोपनीय सूचनाओं को हस्तगत करने में अथवा विरोधी देश की वेबसाइट में अपसूचनाएँ और दुष्प्रचार सम्बन्धी सामग्री का प्रवेश करके, इण्टरनेट का दुरुपयोग किये जाने के अनेक मामले सामने आ रहे हैं। ',
'स्वामी विवेकानन्द ने कहा था कि “यदि पृथ्वी पर ऐसा कोई देश है, जिसे हम पुण्यभूमि कह सकते हैं; यदि कोई ऐसा स्थान है, जहाँ पृथ्वी के सब जीवों को अपना कर्मफल भोगने के लिए आना पड़ता है; यदि कोई ऐसा स्थान है, जहाँ भगवान् को प्राप्त करने की आकांक्षा रखनेवाले जीवमात्र को आना होगा; यदि कोई ऐसा देश है, जहाँ मानव–जाति के भीतर क्षमा, धृति, दया, शुद्धता आदि सद्वृत्तियों का अपेक्षाकृत अधिक विकास हुआ है तो मैं निश्चित रूप से कहूँगा कि वह हमारी मातृभूमि भारतवर्ष ही है।” भारत देश हमारे लिए स्वर्ग के समान सुन्दर है। इसने हमें जन्म दिया है। इसकी गोद में पलकर हम बड़े हुए हैं। इसके अन्न–जल से हमारा पालन–पोषण हुआ है। इसलिए हमारा कर्त्तव्य है कि हम इसे प्यार करें, इसे अपना समझें तथा इस पर सर्वस्व न्योछावर कर दें। आधुनिक भारत उत्तर में कश्मीर से लेकर दक्षिण में कन्याकुमारी तक और पूर्व में असम से लेकर पश्चिम में गुजरात तक फैला हुआ है। उत्तर में भारतमाता के सिर पर हिममुकुट के समान हिमालय सुशोभित है तथा दक्षिण में हिन्द महासागर इसके चरणों को निरन्तर धोता रहता है। उपवन, हरे–भरे मैदान, रेगिस्तान एवं समुद्र–तट इस देश की शोभा के अंग हैं। एक ओर कश्मीर में धरती का स्वर्ग दिखाई देता है तो दूसरी ओर केरल की हरियाली मन को स्वर्गिक आनन्द से भर देती है। यहाँ अनेक नदियाँ हैं, जिनमें गंगा, यमुना, कावेरी, कृष्णा, नर्मदा, रावी, व्यास आदि प्रसिद्ध हैं। ये नदियाँ वर्षभर इस देश की धरती को सींचती हैं, उसे हरा–भरा बनाती हैं और अन्न–उत्पादन में निरन्तर सहयोग करती हैं।']
const urdu =['حوصلہ افزائی ایک لازمی عنصر ہے جو مثبت سوچ کو فوری عمل میں بدل دیتا ہے۔ یہ ایک عظیم خیال کو عمل میں بدل دیتا ہے اور بلاشبہ آپ کے آس پاس کی دنیا کو متاثر کر سکتا ہے۔ تاہم، سبھی حوصلہ افزائی کے ساتھ پیدا نہیں ہوتے ہیں۔ لوگوں کو بعض اوقات اپنے آپ پر کفر ہوتا ہے۔ وہ اکثر کہتے ہیں، "میں ایسا نہیں کر سکتا" یا "وقت ٹھیک نہیں ہے۔" Demotivated ہونے کا مطلب ہے کہ ایک ٹوٹی پھوٹی مشین کی طرح زندگی گزارنا۔ آپ کی زندگی بغیر کسی چنگاری کے اجڑ جائے گی۔ لہذا، زندگی میں اندرونی سکون اور اطمینان حاصل کرنے کے لیے، آپ کو ہمیشہ متحرک رہنا چاہیے۔ ہم انٹرنیٹ کے دور میں رہتے ہیں۔ نیز، یہ ہماری زندگی کا ایک اہم حصہ بن چکا ہے کہ ہم اس کے بغیر نہیں رہ سکتے۔ اس کے علاوہ انٹرنیٹ اعلیٰ درجے کی سائنس اور جدید ٹیکنالوجی کی ایجاد ہے۔ اس کے علاوہ، ہم انٹرنیٹ سے 24×7 منسلک ہیں۔ نیز، ہم بڑے اور چھوٹے پیغامات اور معلومات پہلے سے کہیں زیادہ تیزی سے بھیج سکتے ہیں۔ انٹرنیٹ پر اس مضمون میں، ہم انٹرنیٹ سے متعلق مختلف چیزوں پر بات کرنے جا رہے ہیں؛ انٹرنیٹ کا احاطہ کرنے والے علاقے کا اندازہ لگانا بہت مشکل ہے۔ اس کے علاوہ ہر سیکنڈ ملین لوگ کسی نہ کسی مسئلے یا مسئلے کے ساتھ اس سے جڑے رہتے ہیں۔ اس کے علاوہ، تمام چیزوں کی طرح انٹرنیٹ بھی لوگوں کی زندگی پر کچھ اچھے اور برے اثرات مرتب کرتا ہے۔ لہذا سب سے پہلے ہمیں انٹرنیٹ کے اچھے اور برے اثرات کے بارے میں جاننا ہے۔',
`طالب علمی کی زندگی میں ڈانٹ ڈپٹ ایک عام سی بات ہے۔ ایک شرارتی لڑکا ہونے کے ناطے میں ہمیشہ اپنے والدین سے ڈانٹتا ہوں۔ لیکن ایک دن مجھے میرے انگلش ٹیچر نے سخت ڈانٹا۔ وہ اچھی طرح سے سکھاتی ہے. لیکن اس دن، میں اس لالچ کا مقابلہ نہیں کر سکا جو نینسی ڈریو کے ایک ایڈونچر نے پیش کیا تھا۔ جب وہ پڑھا رہی تھیں، میں اس کتاب کو پڑھنے میں پوری طرح مگن تھا۔ نینسی ڈریو کچھ اسمگلروں کے بچھائے گئے جال میں پھنس گئی تھی اور یہ تب تھا جب میں نے اپنے جھکے ہوئے سر پر ہلکا سا نل محسوس کیا۔ استاد نے مجھے رنگے ہاتھوں پکڑا تھا۔ اس نے مجھے وہاں اور وہاں ڈانٹا اور پوری کلاس کے سامنے میری توہین کی۔ میں شرمندا تھا. میرے گال مجرم ہوش میں جل رہے تھے۔ کلاس ختم ہوئی تو میں استاد کے پاس معافی مانگنے گیا۔ جب اس نے دیکھا کہ مجھے اپنی غلطی کا احساس ہو گیا ہے تو وہ ٹھنڈا ہو گیا اور پھر بڑے ہی مہربان انداز میں مجھے بتایا کہ جب کوئی طالب علم توجہ نہیں دیتا تو یہ کتنا مایوس کن ہوتا ہے۔ میں نے سچے دل سے معذرت کی اور اپنے آپ سے وعدہ کیا کہ آئندہ کبھی ایسی غلطی نہیں کروں گا۔ جب سے یہ پہلی بار وجود میں آیا اس وقت سے لے کر اب تک انٹرنیٹ نے ایک طویل سفر طے کیا ہے۔ اس کے علاوہ، اس سفر کے دوران، انٹرنیٹ نے بہت سی چیزوں کو اپنایا ہے اور زیادہ صارف دوست اور انٹرایکٹو بن گیا ہے۔ اس کے علاوہ ہر چھوٹی بڑی چیزیں انٹرنیٹ پر دستیاب ہیں اور آپ کو مطلوبہ مضمون یا مواد انٹرنیٹ سے حاصل کیا جا سکتا ہے۔ کئی این جی اوز اس دن کو پسماندہ بچوں کی مدد کرنے کے موقع کے طور پر لیتے ہیں۔ وہ پسماندہ بچوں کے لیے کئی پروگرام بھی منعقد کرتے ہیں۔ اکثر لوگ بچوں میں کتابیں، کھانا، چاکلیٹ، کھلونے اور دیگر ضروری اشیاء تقسیم کرتے ہیں۔ اس کے علاوہ، وہ یتیم خانوں کے لیے ثقافتی تقریبات کا اہتمام کرتے ہیں جہاں بچے کوئز، رقص، موسیقی، کھیل وغیرہ جیسے پروگراموں میں حصہ لیتے ہیں۔ یہاں تک کہ بچوں میں انعامات، انعامات بھی تقسیم کیے جاتے ہیں۔ بچوں کو ان کی تعلیم، صحت اور بہبود کے لیے حکومت کی طرف سے نافذ یا اعلان کردہ مختلف اسکیموں سے آگاہ کرنے کے لیے مختلف بیداری کے سیشن منعقد کیے جاتے ہیں۔ جیسا کہ پنڈت جواہر لال نہرو نے کہا تھا، ''آج کے بچے کل کا ہندوستان بنائیں گے۔ جس طرح سے ہم ان کی پرورش کریں گے وہ ملک کے مستقبل کا تعین کرے گا۔ بچوں کا دن چاچا نہرو کے مشہور خیالات کو یاد کرنے اور منانے کا ایک خوبصورت موقع ہے۔ بچوں کے دن کا جشن بچوں اور بڑوں دونوں کو یہ بتانے کا ایک بہترین طریقہ ہے کہ بچے ہی ملک کا حقیقی مستقبل ہیں۔ اس لیے ہر ایک کو ہر بچے کو ایک پرامن بچپن فراہم کرنے کی ذمہ داری کو سمجھنا چاہیے`,
`دن کسی کی زندگی میں یکساں اہمیت کے حامل نہیں ہوتے۔ کچھ خوشی لاتے ہیں جبکہ کچھ غم لاتے ہیں۔ غم اور خوشی دونوں انسان کی زندگی کے لیے یکساں اہمیت کے حامل ہیں، کیونکہ یہ ایک سکے کے دو رخ ہیں۔ جیسا کہ ہم سب سے خوشی کا دن نہیں بھول سکتے، ہم اپنی زندگی کے سب سے افسوسناک دن کو بھی نہیں بھول سکتے۔ میری زندگی کا سب سے افسوسناک دن دیوالی کا دن تھا۔ دیوالی ایک خوشی کا تہوار سمجھا جاتا ہے اور پچھلی دیوالی تک یہ میرا پسندیدہ تہوار تھا۔ پچھلی دیوالی پر، میری بہن، میرا بھائی اور میں آتش بازی میں مصروف تھے۔ میں نے ہاتھ میں 'فُلجھاری' پکڑی ہوئی تھی اور بدقسمتی سے میرا چھوٹا بھائی، جو میرے ساتھ ہی کھڑا تھا، اس کے ہاتھ میں کریکر تھا۔ اس کریکر سے آگ لگ گئی اور بہت زور دار دھماکہ سنائی دیا جس نے میری بہن اور مجھے ہلا کر رکھ دیا۔`,
`مطالعہ علم کا بنیادی ذریعہ ہے۔ کتابیں واقعی انسان کی دوست نہیں ہوتیں۔ ایک بالغ ذہن کے لیے، پڑھنا پریشان ذہنوں کے لیے خوشی اور سکون کا سب سے بڑا ذریعہ ہے۔ اچھی کتابوں کا مطالعہ ہمیں حوصلہ بخشتا ہے اور ہمارے نقطہ نظر کو وسیع کرتا ہے۔ اس لیے پڑھنے کی عادت ڈالنی چاہیے۔ طالب علم کو کبھی بھی اپنے آپ کو صرف اسکول کی کتابوں تک محدود نہیں رکھنا چاہیے۔ اسے کلاسیک، شاعری، ڈرامہ، تاریخ، فلسفہ وغیرہ میں بند لذت سے محروم نہیں ہونا چاہیے، ہم کتابوں کی مدد سے دوسروں کے تجربات سے فائدہ اٹھا سکتے ہیں۔ کتابوں میں بیان کردہ مختلف مصائب، برداشت اور خوشی ہمیں انسانی زندگی کو قریب سے دیکھنے کے قابل بناتی ہے۔ '`,`ابوں میں بیان کردہ مختلف مصائب، برداشت اور خوشی ہمیں انسانی زندگی کو قریب سے دیکھنے کے قابل بناتی`]

const bengali =[`অনুকরণ নয়, অনুসরণ নয়, নিজেকে খুঁজুন, নিজেকে জানুন, নিজের পথে চলুন॥`,'ভাগ্য বলে কিছুই নেই, প্রত্যেকের চেষ্টা ও যত্নের উপর তা গড়ে উঠে॥','দীর্ঘসূত্রিতা ও আলস্যকে প্রশ্রয় দেবেন না। যখন যা করা প্রয়োজন, তখনই তা করুন।','একজন জ্ঞানী জানেন যে তিনি কী জানেন না। আর একজন মূর্খ নিজেকে সবসময় সবজান্তা মনে করে।','আমরা খ্যাতিমান হতে চাই। কিন্তু খ্যাতির জন্যে নীরব সাধনা ও প্রয়োজনীয় কষ্ট স্বীকার করি না। ফলে সাধনাও হয় না, খ্যাতির শীর্ষেও পৌঁছতে পারি না।']

const tamil=['நீ அடுத்தவனை அழிக்க நினைத்தால், உன்னை அழிக்க ஒருவன் வந்து கொண்டிருப்பான்!','மனுசங்க தேவைனு பழகுங்க! உங்க தேவைக்காக பழகாதிங்க!',`நான் நானாகவே இருக்க வேண்டும் என்ற கர்வமும், திமிரும் எனக்குள் அதிகம்!`,`சிறந்த பாடத்தை சதியான நேரத்தில் கற்பிக்க தவறாத ஒரே ஆசான் காலம்!`,`சிறந்த பாடத்தை சதியான நேரத்தில் கற்பிக்க தவறாத ஒரே ஆசான் காலம்!`,'தகுதிக்கு மீறியது ஆசையென்றால், அங்கு அன்பும் தேவையற்றது தான்!']
const telgu=[`జీవితం అంటే నిన్ను నువ్వు చూసుకోవటం కాదు, నిన్ను నువ్వు రూపు దిద్దుకోవటం.`,`నీకు కావలసిన దాని కోసం శ్రమించకుండా, పోగొట్టుకున్న దాని గురించి ఏడవటం మూర్ఖత్వం అవుతుంది.`,`అర్థరహితమైన మాటలకన్నా, అర్థవంతమైన నిశ్శబ్దం చాలా గొప్పది.`,`ఎక్కువగా నమ్మటం, ఎక్కువగా ప్రేమించటం, ఎక్కువగా ఆశించటం ఫలితంగా వచ్చే బాధ కుడా ఎక్కువగానే ఉంటుంది.`,`నీవు ప్రతీరోజు ఒకటికన్నా మెరుగ్గా ఉండటానికి ప్రయత్నించు, అది ఎవరోకాదు నిన్నటి నువ్వే.`,`జరిగిన దాన్ని గురించి ఎప్పుడూ చింతించకు. ఎందుకంటే, మనకు జరిగే మంచి మనకు ఆనందాన్ని ఇస్తే జరిగిన చెడు`]
const french =[`Quels sont les facteurs de la montée du Front National et de son succès aux élections présidentielles en 2002? Apres les élections présidentielles de 2002 et la nomination de Jean-Marie Le Pen,`,`Un incroyable total de seize candidats se sont présentés aux élections de 2002 ! Un choix extensif comme certains pourraient penser, trop extensif pensent d’autres. Tout le monde pensait que, comme tous les ans, Jacques Chirac le président actuel et Lionel Jospin le Premier Ministre`]
const spanish=[`Président de la République. L’insécurité face la menace terroriste que provoqua le 11 septembre, la violence urbaine et la hausse du chaumage en France poussèrent une population vieillissante se confier un homme contre limmigration massive et lintégration raciale. Le Pen est connu pour ses propos anti-sémite, en particulier laffirmation que limmigration de mass est le pire danger nous avons jamais rencontré en histoire. Linflux dimmigrants de partout dans le monde en France, un pays réputé`,``]
const turkish=["Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.","Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.",'Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.','Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.','Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.','Motivasyon, olumlu düşünceyi anında değiştiren önemli bir faktördür.']
const russian=[`Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.`,'Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.','Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.','Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.','Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.','Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.','Мотивация — важный фактор, превращающий позитивные мысли в мгновенные.']

    const english = [`Motivation is an essential factor that changes positive thought into instant action. It switches a great idea into action and can undoubtedly affect the world around you. However, not all are born with motivation. People sometimes have disbelief in themselves; they often say, “I can’t do that” or “the timing is not right.” Being demotivated means living a life as a worn-out machine. Your life will become dull without any spark. So, to gain inner peace and satisfaction in life, you must always stay motivated. We live in the age of the internet. Also, it has become an important part of our life that we can’t live without it. Besides, the internet is an invention of high-end science and modern technology. Apart from that, we are connected to internet 24×7. Also, we can send big and small messages and information faster than ever. In this essay on the Internet, we are going to discuss various things related to the internet.It is very difficult to estimate the area that the internet cover. Also, every second million people remain connected to it with any problem or issue. Apart from that, just like all the things the internet also has some good and bad effect on the life of people. So the first thing which we have to do is learn about the good and bad effect of the internet.`
  ,'Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head. The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize. When she saw that I had realized my mistake, she cooled down and then told me in a very kind manner how disheartening it was when she found any student not paying attention. I was genuinely sorry and promised to myself never to commit such a mistake again. From the time it first came into existence until now the internet has completed a long journey. Also, during this journey, the internet has adopted many things and became more user-friendly and interactive. Besides, every big and small things are available on internet and article or material that you require can be obtainable from internet. Several NGOs take this day as the opportunity to extend a helping hand to the underprivileged children. They also organize several programs for underprivileged children. Often, people distribute books, food, chocolates, toys, and other necessary items among the children. Also, they organize cultural events for the orphanages where the children participate in events like quiz, dance, music, sports, etc. Even prizes, awards are distributed to the children. Various awareness sessions are conducted to make the children aware of various schemes implemented or announced by the government for their education, health, and welfare. As Pundit Jawaharlal Nehru said, “The children of today will make the India of tomorrow. The way we bring them up will determine the future of the country.” Children’s day is a beautiful occasion to remember and celebrate the famous thoughts of Chacha Nehru. Celebration on children’s day is a great way to make both children and adults aware that children are the true future of the country. Hence everyone should understand the responsibility towards providing a fulfilled childhood to every child.',
,'Days are not of equal value in one’s life. Some bring happiness while others bring sadness. Sadness and happiness both are equally important to man’s life, since they are the two sides of a coin. As we cannot forget the happiest day, we are unable to forget the saddest day of our life too. The saddest day of my life was the Diwali Day. Diwali is considered to be a happy festival and till last Diwali, it was my favorite festival. On last Diwali, my sister, my brother and I were busy lighting the fireworks. I was holding a ‘fuljhari’ in my hand and unfortunately my younger brother, who was standing just beside me, had a cracker in his hand. This cracker caught fire and a very loud explosion was heard which shook my sister and me '
,'Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other’s experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. '
,'Recently, an exhibition ‘Building A New India’ was held in the capital. It was organized by the Ministry of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian cultural inheritance. First of all, I visited the general section of the exhibition where different charts and photographs depicting India’s development in various fields were set. Most impressive photographs among these were those showing India’s nuclear development. The second section dealt with India’s magnificent historical background. I was fascinated by the pictures of Mohanjodaro excavation. Then I saw the most beautiful and colorful section of the exhibition i.e. the cultural section. It consisted of paintings, sculptures, photographs etc. The Rajasthani and Gujarati paintings were very colourful and attractive. This exhibition, inaugurated by the Prime Minister, lasted for a week. It proved to be of great educational'];
let data;
if(this.lng==='en') { data = english}
if(this.lng==='is') { data = hindi}
if(this.lng==='rg') { data = hindi}
if(this.lng==='rc') { data = hindi}
if(this.lng==='ur') { data = urdu}
if(this.lng==='be') { data = bengali}
if(this.lng==='ta') { data = tamil}
if(this.lng==='te') { data = telgu}
if(this.lng==='fr') { data = french}
if(this.lng==='tu') { data = turkish}
if(this.lng==='sp') { data = spanish}
if(this.lng==='rs') { data = russian}

const dataPassage = passage.length> 3? passage: data[passage];

const outputData = wordlimit===''?dataPassage: dataPassage.split(' ').slice(0,wordlimit).join(' ')

this.loadData(outputData)
   }
  loadData(getdata) {

    const data = getdata.split("");

    let html = [];
    data.forEach(element => {
      html.push(`<span class="text-color">${element}</span>`);
    });
    const markup = html.join("");
    this.#typeContainer.insertAdjacentHTML("afterbegin", markup);
  }
  
  scrollInView(){
     ///
//Scroll into view
this.WordContainer = this.#typeContainer.querySelectorAll(`span`);
this.WordContainer[this.i].scrollIntoView()

  }

  AccuracyColor(dat) {
   const usertext =document.querySelector(`.type-inputText`)
 
   /// block blackspace fire
    usertext.addEventListener(`keydown`,(e)=>{
     
if(dat.btnBackSpace===`off` && e.key===`Backspace`){e.preventDefault()}
    if(e.repeat===true){
      e.preventDefault()
    }})
    usertext.addEventListener(
      `keyup`,
      function (key) {

        if(key.key!=='Shift'&&key.key!=='Control'&&key.key!=='Alt' &&key.key!=='CapsLock' &&key.key!=='Backspace' && this.i >=0){
          
        
          let keyuser= `${usertext.value}`.split('')[this.i]

       
        /// color words
        if (dat.highliter === 'on' &&  this.i >= 0 ) {
         
          this.WordContainer = this.#typeContainer.querySelectorAll(`span`);
        
          this.WordContainer[this.i].classList.add(
            `${keyuser === this.WordContainer[this.i].textContent
              ? "correctType"
              : "wrongType"
            }`
          );
        } 
        
        //
       
        if(this.WordContainer[`${this.WordContainer.length -1}`] === this.WordContainer[this.i]){
          this.resultPage()
        }
       

        //sound play
        
        if (dat.sound === 'on' && keyuser !== this.WordContainer[this.i].textContent) {
         document.querySelector(`.play`).play()
        
        }
       this.scrollInView()

        //accuracy
        this.accuracy()
        this.keypress++
        
        this.totalWords++;
        if (keyuser === this.WordContainer[this.i].textContent)
          this.correctWords++;
        this.i++;
      }

    if(key.code===`Backspace` && this.i >= 1 && dat.btnBackSpace===`on`){
      key.preventDefault()
     
      this.i--;
      this.WordContainer = this.#typeContainer.querySelectorAll(`span`);
      this.WordContainer[this.i].classList.remove(`wrongType`)
      this.WordContainer[this.i].classList.remove(`correctType`)
    this.scrollInView()
    }
    
    }.bind(this)
    );
   
  }
  //gross npm 
  grossWPM(){
    let time = 0;
    let GWPM=0
    const timer = function (){
const settimer= setInterval(function(){
let   timeMin= (time/60).toFixed(2)
let  words = this.keypress/ 5

this.GWPM = (words/+timeMin).toFixed(0)
document.querySelector(`#gwpmValue`).textContent =this.GWPM
time++;
}.bind(this),1000)
    return settimer}.bind(this)
   return timer()
    
  }
  /// npm
  wpm (){
    let time = 0;
    const timer = function (){
const settimer= setInterval(function(){
let   timeMin= (time/60).toFixed(2)
let wrongWords = this.totalWords - this.correctWords
let  words = (this.keypress- wrongWords) / 5

this.WPMvalue.textContent= (words/+timeMin).toFixed(0)
this.WPM = this.WPMvalue.textContent
   
time++;
}.bind(this),1000)
    return settimer}.bind(this)
return    timer()

  }
  ///Accuracy
  accuracy(){
// accuracy
accuracyValue.textContent = `${(
  (this.WPM/ this.GWPM) *
  100
).toFixed()}%`;
this.Accuracy = accuracyValue.textContent
  }
  //// for passage and time change custum input
 changeOption(hideObj, showObj) {
    document.querySelector(`.${hideObj}`).style.display = "none";
    document.querySelector(`.${showObj}`).style.display = "inline";
    document.querySelector(`.${showObj}`).focus();
    
  }
  resultPage(){

document.querySelector(`.resultContainer`).style.display="none"
document.querySelector(`.result`).style.display="block"
document.querySelector(`.user`).textContent= `Typing Result.`
document.querySelector(`.user-name`).textContent= this.user
document.querySelector(`.nwpm-result`).textContent= this.WPM
document.querySelector(`.gwpm-result`).textContent=this.GWPM
document.querySelector(`.accuracy-result`).textContent= this.Accuracy
document.querySelector(`.totalWords-result`).textContent= (this.totalWords/5).toFixed(0)
document.querySelector(`.rightWords-result`).textContent= (this.correctWords/5).toFixed(0)
document.querySelector(`.wrongWords-result`).textContent= ((this.totalWords-this.correctWords) /5).toFixed(0)
document.querySelector(`.tryagain`).addEventListener(`click`,function(){
  window.location.reload();
  })}
  timer(userTime) {
    let time = userTime*60
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

      const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        // In each call, print the remaining time to UI
        document.querySelector(`#timer`).textContent = `${min}:${sec}`;
    if (time === 0) {
          clearInterval(timer);
          //show result 
this.resultPage()
}


        
        // Decrease 1s
        time--;
      }.bind(this);
      // Set time to 5 minutes
      
      // Call the timer every second
      tick();
      const timer = setInterval(tick, 1000);
      return timer;
  }
}
const admin = new TypingApp();

// const container = document.querySelector(`.type-input-container`)
// container.querySelectorAll(`span`)


