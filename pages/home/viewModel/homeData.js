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
}
