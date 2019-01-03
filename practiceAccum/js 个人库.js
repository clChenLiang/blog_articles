/**
 * 安全地获取指定元素链的值
 * @param obj 根对象
 * @param strLink 获取路径
 * @return undefined || 获取值
 */
function getPropSafe(obj, strLink){
  let deep = 1;
  // 递归
  let objRecursionArray = strLink.split('.');
  let maxDeep = objRecursionArray.length
  let objRecursion = obj;
  while(objRecursion && deep < maxDeep){
    if( objRecursion[objRecursionArray[deep]] !== null &&  objRecursion[objRecursionArray[deep]] !== undefined){
      
      objRecursion = objRecursion[objRecursionArray[deep]];
      deep++;
    }else{
      objRecursion = undefined;
      break;
    }
  }
  return objRecursion;
}

/**
 * 获取 元素/模块 的可遍历属性
 */
function getAttrs(obj){
  let attrs = []
  for(let key in obj){
    attrs.push(key)
  }
  return attrs;
}

/**
 * 正则：为空串，或者 满足...
 */
function regNullOrWords(){
  let reg = /(^[a-z]+$)|(^$)/
  // 中文
  // let reg = /(^\u4E00-\u9FA5]+$)|(^$)/
}

/**
 * 合并对象
 * 去掉前者多余分量
 */
function objFilter(objOrigin, objTemplate) {
  // 保持结果的纯净，对参数无干扰
  let result = {}
  let withObj = !Array.isArray(objTemplate)
  for(let key in objTemplate) {
    result[withObj ? key : objTemplate[key]] = withObj ? (objOrigin[key] || objTemplate[key] || undefined) : (objOrigin[objTemplate[key]] || undefined);
  }
  return result;
}