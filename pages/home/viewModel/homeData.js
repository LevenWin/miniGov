function getBanners(data) {
  var banners = []
  var section = data.sections["1"] 
  if (section['title'] == '幻灯') {
    for(var key in section['recommends']) {
      banners.push(section['recommends'][key])
    }
  }

  
  if(banners.length > 0) {
    let images = []
    banners.forEach(function(value, index, array) {
      images.push(value['article'])
    });
    banners = images
  }
  return banners
}

function getSection3(data) {
  var section = data.sections["3"];
  var recommends =section.recommends;
  var template2 = []
  var template1 = []
  var template4 = []

  for(var obj in recommends) {
    if (recommends[obj].recommendTemplate == 2) {
      template2.push(recommends[obj]["article"])
    }
    if (recommends[obj].recommendTemplate == 1) {
      template1.push(recommends[obj]["article"])
    }
    if (recommends[obj].recommendTemplate == 4) {
      template4.push(recommends[obj]["article"])
    }
  }
  section.template2 = template2
  section.template1 = template1
  section.template4 = template4
  return section
}
function getSection4(data) {
  var section = data.sections["4"]
  var items = getValues(section['recommends'])
  items = items.sort((a, b) => {
    return a['position'] > b['position'];
  })

  var template4 = []
  for (var obj in items) {
    if (items[obj].recommendTemplate == 4) {
      template4.push(items[obj]['article'])
    }
  }

  section.mediaImage = items[4]['article']['thumbnails']['3']['file'];
  section.template4 = template4;
  section.items = items
  return section;
}

function getNewSection(data) {
  if (data.hasOwnProperty('newSections2')) {
    var obj = data['newSections2']['37']
    var recommends = getValues(obj['recommends'])
    obj.items = recommends;
    return obj;
  }
  return undefined;
}

function filterBannerAndArticle(data) {
  var items = getValues(data)

  var item = {};
  var i = -1;
  items.forEach((value, index) => {
    if(value.position == 0) {
      item = value
      i = index
    }
  })
   
  if (i >= 0) {
    items.splice(i, 1)
  }
  items = items.sort((a, b) => {
    return b['publishTime'] - a['publishTime']
  })
  return [[item],items]
}

function getGovsItem(data) {
  var items = getValues(data['sections']);
  items = items.sort((a, b) => {
    return a['position'] - b['position'];
  })
  for (var i in items) {
    var obj = getValues(items[i].recommends)[0]
    items[i].article = obj
  }
  return items
}

function getValues(item) {
  var items = [];
  for(var i in item) {
    items.push(item[i])
  }
  console.log(items)
  return items
}

function getTabItems(item) {
  var items = getValues(item)
  items = items.sort((a, b) => {
    return a['position'] - b['position'];
  })
  return items;
}

function getColumnData(article) {
  var items = getValues(article.articles)
  items.sort((a, b) => {
    return b.publishTime - a.publishTime 
  })
  var item = undefined;
  var i = -1;
  items.forEach((value, index) => {
    if (value.position == 0) {
      item = value
      i = index
    }
  })

  if (i >= 0) {
    items.splice(i, 1)
  }
  return [items, item]
}
function getSubCategory(data) {
  var articles = getValues(data.articles)
  articles = articles.sort((a, b) => {
    return a['position'] - b['position'];
  });
  return articles;
}
function getService(data) {
  var service = {}
  // banner
  var articles = getValues(data.sections['30']['recommends']).sort((a, b) => {
      return a.position - b.position;
  }) 
  var res = [];
  for (var a in articles) {
    res.push(articles[a]['article']);
  }
  service['banners'] = res
  res = [];

  // service tag
  var tags = getValues(data.sections['31']['recommends']).sort((a, b) => {
    return a.position - b.position;
  }); 

  for (var a in tags) {
    res.push(tags[a]['article']);
  }
  service['tags'] = res
  res = [];
  //  service news
  var news = getValues(data.sections['32']['recommends']).sort((a, b) => {
    return a.position - b.position;
  }); 
  for (var a in news) {
    res.push(news[a]['article']);
  }
  service['news'] = res;
  res = [];

  // service info
  res = data.sections['33']['appinfo'].sort((a, b) => {
    return a.orderId - b.orderId;
  });
  var info = {};
  info['info'] = res;
  info['ftitle'] = data.sections['33']['ftitle'];
  service['info'] = info;

  // local info
  res = data.sections['35']['appinfo'].sort((a, b) => {
    return a.orderId - b.orderId;
  });
  var info = {};
  info['info'] = res;
  info['ftitle'] = data.sections['35']['ftitle'];
  service['local'] = info;
  res = [];

  // zhuanti 
  var zhuanti = getValues(data.sections['34']['recommends']).sort((a, b) => {
    return a.position - b.position;
  });
  for (var a in zhuanti) {
    res.push(zhuanti[a]['article']);
  }
  zhuanti = {};
  zhuanti['article'] = res;
  zhuanti['ftitle'] = data.sections['34']['ftitle'];
  service['zhuanti'] = zhuanti;
  res = [];
  console.log(service,'service')
  return service;
}
module.exports = {
  getBanners,
  getValues,
  getTabItems,
  getSection3,
  getNewSection,
  getSection4,
  filterBannerAndArticle,
  getGovsItem,
  getColumnData,
  getSubCategory,
  getService,
}
