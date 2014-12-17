/*
var msg = "Missing something...";
var http = require('http');
var server = http.createServer(function(request,response)
{
  var path = request.url;
  console.log(path);
  var headline = path.split("/")[1];
  var headline2 = path.split("/")[2];
  if(path==="/tortilla/rice")
    {
      response.end("<h1>MMMMMM!</h1>");
    }
    else if(headline==="tortilla" && headline2==="guac")
      {
        response.end("<h1>AHHHHH!</h1>");
      }
      else if(headline==="tortilla" && headline2!="")
        {
          response.end("well "+headline2+" is good on tortilla")
        }
        else
          {
            response.end(msg);
          }
        })
        server.listen(2000);

var msg = "Missing something";
var http = require('http');
var server = http.createServer(function(request,response)
{
  var artists = ["Joy_Division","The_Smiths","Interpol"];
  var path = request.url;
  console.log(path);
  var headline = path.split("/")[1];
  var headline2 = path.split("/")[2];
  if
    (path==="/artists")
    {
      response.end("<html><body><ul><li>"+artists[0]+"</li><li>"+artists[1]+"</li><li>"+artists[2]+"</li></ul></body></html>")
    }
 else if
    (headline==="artists" && headline2==="Joy_Division")
    {
      var Joy_Division = ["Unknown Pleasures","Closer","Substance"];
      var The_Smiths = ["The Queen Is Dead","Meat is Murder", "Hatful of Hollow"];
      response.end("<html><body><ul><li>"+Joy_Division[0]+"</li><li>"+Joy_Division[1]+"</li><li>"+Joy_Division[2]+"</li></ul></body></html>")
    }

 else if
    (headline==="artists" && headline2==="Interpol")
    {
      var Interpol = ["Turn on the Bright Lights","Antics","El Pintor"];
        // var The_Smiths = ["The Queen Is Dead","Meat is Murder", "Hatful of Hollow"];
      response.end("<html><body><ul><li>"+Interpol[0]+"</li><li>"+Interpol[1]+"</li><li>"+Interpol[2]+"</li></ul></body></html>")
    }
 else if
    (headline==="artists" && headline2==="The_Smiths")
    {
      var The_Smiths = ["The Queen Is Dead","Meat is Murder", "Hatful of Hollow"];
      response.end("<html><body><ul><li>"+The_Smiths[0]+"</li><li>"+The_Smiths[1]+"</li><li>"+The_Smiths[2]+"</li></ul></body></html>")
    }

  else
    {
      response.end(msg);
    }


})
  server.listen(2000);


*/

var msg = "Missing something";
var http = require('http');
var server = http.createServer(function(request,response)
{

  var album = function(name, firstsong, secondsong, thirdsong)
  {
    this.name = name;
    this.record = [firstsong,secondsong,thirdsong];

  }

  var music = function(band_name, album, album2)
  {
    this.band = band_name;
    this.albums = [album,album2]
  }


  var Turn_on_the_Bright_Lights = new album ("Turn_on_the_Bright_Lights","Untitled","Obstacle 2", "Leif Erikson");
  var El_Pintor = new album ("El_Pintor","All The Rage Back Home","My Desire", "Ancient Ways");
  var Interpol = new music("Interpol",Turn_on_the_Bright_Lights, El_Pintor );

  var Hatful_of_Hollow = new album ("Hatful_of_Hollow", "Handsome Devil", "How Soon is Now?", "This Charming Man");
  var The_Queen_is_Dead = new album ("The_Queen_is_Dead", "There's a Light that Never Goes Out", "Bigmouth Strikes Again", "Some Girls are Bigger than Others");
  var The_Smiths = new music("The_Smiths", Hatful_of_Hollow, The_Queen_is_Dead);

  var Closer = new album ("Closer", "Atmosphere", "Isolation", "Atrocity Exhibition");
  var Unknown_Pleasures = new album ("Unknown_Pleasures", "New Dawn Fades", "Shadowplay", "She's Lost Control");
  var Joy_Division = new music("Joy_Division", Closer, Unknown_Pleasures);

  var artists = [Joy_Division,The_Smiths,Interpol];
  var path = request.url;
  console.log(path);
  var headline = path.split("/")[1];
  var headline2 = path.split("/")[2];
  var headline3 = path.split("/")[3];

  var str = "";
  var a = "<html><body><ul>";
  var b = "</ul></body></html>";

  if
  (headline3)
    {
      artists.forEach(function(band)
      {
        if(headline2===band.band)
          {
        for(i=0;i<band.albums.length;i++)
          {
          if(headline3===band.albums[i].name)
            {
             for(j=0;j<band.albums[i].record.length;j++)
                {str+= "<li>"+band.albums[i].record[j]+"</li>"}
            }
          }
          }
      })
      response.end(a+str+b);
      str = "";
    }

  if
  (headline2)
    {
      artists.forEach(function(band)
      {
        if(headline2===band.band)
          {
        for(i=0;i<band.albums.length;i++)
          {str+= "<li>"+band.albums[i].name+"</li>"}
          }
      })
        response.end(a+str+b);
        str = "";
    }

  if
  (headline==="artists")
  {
    artists.forEach(function(band)
    {
      str+= "<li>"+ band.band + "<li>";
    })
      response.end(a+str+b);
      str = "";
  }





//  else
  ///  {
//      response.end(msg);
//    }


  })
  server.listen(2000);



/*

var msg = "Missing something";
var http = require('http');
var server = http.createServer(function(request,response)
{
  var artists = [Joy_Division,The_Smiths,Interpol];
  var path = request.url;
  console.log(path);
  var headline = path.split("/")[1];
  var headline2 = path.split("/")[2];

  band = function()
  if
  (path==="/artists")
  {
    response.end("<html><body><ul><li>"+artists[0]+"</li><li>"+artists[1]+"</li><li>"+artists[2]+"</li></ul></body></html>")
  }

artists.forEach(function(band)
{
  response.end("<html><body><ul><li>"+band[0]+"</li><li>"+band[1]+"</li><li>"+band[2]+"</li></ul></body></html>")
})
*/
