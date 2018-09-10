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
  section.items = items
  return section;
}

function getNewSection(data) {
  var obj = data['newSections2']['37']
  var recommends = getValues(obj['recommends'])
  obj.items = recommends;
  return obj;
}
function getValues(item) {
  var items = [];
  for(var i in item) {
    items.push(item[i])
  }
  return items
}

function getTabItems(item) {
  var items = getValues(item)
  items = items.sort((a, b) => {
    return a['position'] - b['position'];
  })
  var obj = items.slice(0, 10)
  return obj;
}
module.exports = {
  getBanners,
  getValues,
  getTabItems,
  getSection3,
  getNewSection,
  getSection4
}