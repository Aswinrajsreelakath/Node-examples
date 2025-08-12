// const { stringify } = require("querystring");



//http://localhost:3002/getPaginatedUsers?pageNumber=1&count=10

const http=require("http")
const PORT=3002;

let users=[{"id":1,"first_name":"Mord","email":"mrowswell0@china.com.cn"},
{"id":2,"first_name":"Harvey","email":"hschimpke1@paginegialle.it"},
{"id":3,"first_name":"Ellie","email":"ellorente2@cbc.ca"},
{"id":4,"first_name":"Casper","email":"cemmines3@imgur.com"},
{"id":5,"first_name":"Mattias","email":"mhanselman4@shinystat.com"},
{"id":6,"first_name":"Dasha","email":"deathorne5@buzzfeed.com"},
{"id":7,"first_name":"Gaby","email":"gwye6@hubpages.com"},
{"id":8,"first_name":"Zared","email":"zgoodhay7@google.co.uk"},
{"id":9,"first_name":"Joceline","email":"jsomerfield8@bizjournals.com"},
{"id":10,"first_name":"Martyn","email":"mvido9@usatoday.com"},
{"id":11,"first_name":"Myrlene","email":"mwoolisa@livejournal.com"},
{"id":12,"first_name":"Melina","email":"mjammeb@epa.gov"},
{"id":13,"first_name":"Ruben","email":"reymerc@oaic.gov.au"},
{"id":14,"first_name":"Heath","email":"hgilleyd@reuters.com"},
{"id":15,"first_name":"Perceval","email":"pcarolinee@furl.net"},
{"id":16,"first_name":"Valencia","email":"vbarlingf@wikia.com"},
{"id":17,"first_name":"Adina","email":"alebbong@senate.gov"},
{"id":18,"first_name":"Starr","email":"skelloughh@youtu.be"},
{"id":19,"first_name":"Peggi","email":"praffeortyi@zimbio.com"},
{"id":20,"first_name":"Thedrick","email":"thandslipj@ted.com"},
{"id":21,"first_name":"Cathyleen","email":"cboyettk@smugmug.com"},
{"id":22,"first_name":"Mahalia","email":"mmaseykl@chicagotribune.com"},
{"id":23,"first_name":"Eveline","email":"elearmanm@github.com"},
{"id":24,"first_name":"Taddeo","email":"tcallingtonn@twitter.com"},
{"id":25,"first_name":"Anatola","email":"aflinto@java.com"},
{"id":26,"first_name":"Fairleigh","email":"fgrzesiewiczp@cloudflare.com"},
{"id":27,"first_name":"Oswell","email":"oatlayq@earthlink.net"},
{"id":28,"first_name":"Fidelio","email":"fpyattr@earthlink.net"},
{"id":29,"first_name":"Ebeneser","email":"efiridolfis@icq.com"},
{"id":30,"first_name":"Alford","email":"aretallickt@seesaa.net"},
{"id":31,"first_name":"Caitlin","email":"cripponu@hao123.com"},
{"id":32,"first_name":"Emlyn","email":"emarnanev@wiley.com"},
{"id":33,"first_name":"Laney","email":"lsertinw@youtu.be"},
{"id":34,"first_name":"Rycca","email":"rlangdridgex@1und1.de"},
{"id":35,"first_name":"Lynnett","email":"lcastiglioy@a8.net"},
{"id":36,"first_name":"Nan","email":"nscrasez@dion.ne.jp"},
{"id":37,"first_name":"Ambrosio","email":"agadaud10@domainmarket.com"},
{"id":38,"first_name":"Alberto","email":"atittershill11@ucsd.edu"},
{"id":39,"first_name":"Ronnica","email":"rusherwood12@ftc.gov"},
{"id":40,"first_name":"Morris","email":"mhaeslier13@hugedomains.com"},
{"id":41,"first_name":"Britteny","email":"bgiametti14@geocities.jp"},
{"id":42,"first_name":"Winthrop","email":"wgusticke15@tumblr.com"},
{"id":43,"first_name":"Robena","email":"rstouther16@nih.gov"},
{"id":44,"first_name":"Winfred","email":"wcazin17@umn.edu"},
{"id":45,"first_name":"Pattin","email":"pfrosch18@techcrunch.com"},
{"id":46,"first_name":"Fair","email":"fdeners19@wordpress.com"},
{"id":47,"first_name":"Junina","email":"jcuddihy1a@odnoklassniki.ru"},
{"id":48,"first_name":"Pippo","email":"ptort1b@ebay.com"},
{"id":49,"first_name":"Ericha","email":"ekelson1c@nifty.com"},
{"id":50,"first_name":"Josepha","email":"jminers1d@guardian.co.uk"},
{"id":51,"first_name":"Loutitia","email":"laccum1e@digg.com"},
{"id":52,"first_name":"Norbie","email":"nbrixey1f@arstechnica.com"},
{"id":53,"first_name":"Eleen","email":"ecrummy1g@blogs.com"},
{"id":54,"first_name":"Nestor","email":"nfiltness1h@tiny.cc"},
{"id":55,"first_name":"Elinor","email":"ewiddison1i@tmall.com"},
{"id":56,"first_name":"Iona","email":"ihuddart1j@uiuc.edu"},
{"id":57,"first_name":"Jacklyn","email":"jletrange1k@state.gov"},
{"id":58,"first_name":"Josephina","email":"jbearcock1l@feedburner.com"},
{"id":59,"first_name":"Andie","email":"aeccles1m@google.ca"},
{"id":60,"first_name":"Marga","email":"mnunnery1n@nps.gov"},
{"id":61,"first_name":"Neile","email":"nscamerdine1o@ucoz.ru"},
{"id":62,"first_name":"Niel","email":"npadwick1p@etsy.com"},
{"id":63,"first_name":"Consolata","email":"callan1q@phpbb.com"},
{"id":64,"first_name":"Burt","email":"bagett1r@godaddy.com"},
{"id":65,"first_name":"Alisha","email":"aroskeilly1s@reverbnation.com"},
{"id":66,"first_name":"Jeanie","email":"jburley1t@bbc.co.uk"},
{"id":67,"first_name":"Reggie","email":"rattle1u@imageshack.us"},
{"id":68,"first_name":"Salome","email":"snutton1v@altervista.org"},
{"id":69,"first_name":"Lorant","email":"lgodbert1w@mapquest.com"},
{"id":70,"first_name":"Elyssa","email":"edandy1x@ibm.com"},
{"id":71,"first_name":"Inger","email":"ibazoche1y@usa.gov"},
{"id":72,"first_name":"Lesly","email":"lreuss1z@youtu.be"},
{"id":73,"first_name":"Franklin","email":"fkasper20@va.gov"},
{"id":74,"first_name":"Stanwood","email":"shalm21@youtube.com"},
{"id":75,"first_name":"Luca","email":"ldellar22@gravatar.com"},
{"id":76,"first_name":"Shadow","email":"semmerson23@weebly.com"},
{"id":77,"first_name":"Ann","email":"aantal24@devhub.com"},
{"id":78,"first_name":"Sarena","email":"slarmouth25@cpanel.net"},
{"id":79,"first_name":"Sharl","email":"sgianettini26@miibeian.gov.cn"},
{"id":80,"first_name":"Pattie","email":"pmillea27@netlog.com"},
{"id":81,"first_name":"Chadd","email":"cmcamish28@walmart.com"},
{"id":82,"first_name":"Delphine","email":"dnovichenko29@wikispaces.com"},
{"id":83,"first_name":"Pat","email":"pbrimham2a@bloglines.com"},
{"id":84,"first_name":"Horace","email":"hlound2b@google.com"},
{"id":85,"first_name":"Izzy","email":"ikerslake2c@wikimedia.org"},
{"id":86,"first_name":"Adiana","email":"amorecombe2d@rediff.com"},
{"id":87,"first_name":"Arnuad","email":"abuckby2e@unicef.org"},
{"id":88,"first_name":"Mackenzie","email":"mblackmore2f@tamu.edu"},
{"id":89,"first_name":"Adriaens","email":"aleatherbarrow2g@shutterfly.com"},
{"id":90,"first_name":"Teresita","email":"tchopin2h@boston.com"},
{"id":91,"first_name":"Murdock","email":"mwilford2i@trellian.com"},
{"id":92,"first_name":"Ofella","email":"omeaking2j@tmall.com"},
{"id":93,"first_name":"Powell","email":"pkilmurry2k@prlog.org"},
{"id":94,"first_name":"Sheelagh","email":"sgallager2l@taobao.com"},
{"id":95,"first_name":"Martie","email":"mfairnington2m@odnoklassniki.ru"},
{"id":96,"first_name":"Sam","email":"svannini2n@springer.com"},
{"id":97,"first_name":"Gnni","email":"gkwietak2o@smugmug.com"},
{"id":98,"first_name":"Daron","email":"dcrayden2p@statcounter.com"},
{"id":99,"first_name":"Rance","email":"rshallow2q@alexa.com"},
{"id":100,"first_name":"Kristoffer","email":"kgoodwyn2r@google.ca"}]

const server=http.createServer((req,res)=>{
    const url= req.url;
if(url.includes("getPaginatedUsers")){
    let str=url.split("?")[1];
    let pageNumber=parseInt(str.split('&')[0].split('=')[1]);
    let count = str.split('&')[1].split('=')[1]

let startIndex =(pageNumber -1)*count;
let endIndex =startIndex + count;

let paginatedUsers=users.slice(startIndex,endIndex)
res.end(JSON.stringify(paginatedUsers))

}
else{
    res.end("invalid input")
}

})

server.listen(PORT,(err)=>{
   if(err){
    console.log("err",err);
    
   }
   else{
     console.log(" server start running = http://localhost:3002/getPaginatedUsers?pageNumber=1&count=10")
   }
})
