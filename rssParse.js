var rss = '<?xml version="1.0" encoding="utf-8"?>'+
'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">'+
'<channel>'+
    '<title>TUT.BY: Новости ТУТ - Выборы</title>'+
    '<link>http://news.tut.by/</link>'+
    '<description>TUT.BY: Новости ТУТ - Выборы</description>'+
    '<language>ru</language>'+
    '<image>'+
        '<url>http://img.tyt.by/i/rss/news/logo.gif</url>'+
        '<title>TUT.BY: Новости ТУТ - Выборы</title>'+
        '<link>http://news.tut.by/</link>'+
    '</image>'+
    '<pubDate>Thu, 30 Jul 2015 21:33:31 +0300</pubDate>'+
    '<lastBuildDate>Thu, 16 Jul 2015 00:00:00 +0300</lastBuildDate>'+
    '<ttl>5</ttl>'+
    '<atom:link href="http://news.tut.by/rss/elections.rss" rel="self" type="application/rss+xml" />'+
'</channel>'+
'</rss>';

// $.get('http://news.tut.by/rss/elections.rss', function(data) {
//     rssHandle(data);
// });
$.ajax({
  url: 'http://news.tut.by/rss/elections.rss',
  dataType: "jsonp",
  success: function (data) {
    var smm = toString(data);
    console.log(smm);
    // rssHandle(smm);
  }
});


// for(var u = 0; u < 10; u++) {
//     u += 5;
//     console.log(u);
// }
function tagHandler(count, name, str) {
    var tagContent = '';
    if(name === 'title') {
        while(true) {
            count ++;
            if(rss[count] === '<') {
                console.log(tagContent)
                break;
            }
            tagContent += rss[count]
        }
    }
    return count;
}

function tagStart(count, str) {
    var tagName = '';
    while(true) {
        count++;
        if(str[count] === '>') {
            count = tagHandler(count, tagName, str);
            break;
        }
        tagName += str[count];
    }
    return count++;
}
function rssHandle(rss) {
    for (var i = 0; i < rss.length; i++) {
        if(rss[i] === '<') {
            // tag name start
            i = tagStart(i, rss);
        }
    }
}
// for (var i = 0; i < rss.length; i++) {
//     if(rss[i] === '<') {
//         // tag name start
//         i = tagStart(i, rss);
//     }
        // i++;
        // var tagName = '';
    //     for(var j = i; ;j++) {
    //         // record tag name
    //         if(rss[j] === '>') {
    //             // tag name ends
    //             if(tagName === 'title') {
    //                 j++;
    //                 var TagContent = '';
    //                 for (var k = j; ; k++) {
    //                     if(rss[k] === '<') {
    //                         // TagContent ends
    //                         console.log(TagContent)
    //                         break;
    //                     } else {
    //                         TagContent = TagContent + rss[k];
    //                     }
    //                 }
    //                 // start record tag content
    //                 // console.log('title')
    //             }
    //             break;
    //         } else {
    //             tagName = tagName + rss[j];
    //         }
    //     }

    // }
    // rss[i]
// } 
