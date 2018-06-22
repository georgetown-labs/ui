(window.webpackJsonp=window.webpackJsonp||[]).push([["Switch"],{"./manifest/temp/material/Switch.js":function(e,t,o){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(o("./node_modules/@material-ui/core/Switch/index.js"));t.Switch=n.default},"./node_modules/@material-ui/core/IconButton/IconButton.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/builtin/extends.js")),r=n(o("./node_modules/@babel/runtime/helpers/builtin/defineProperty.js")),l=n(o("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),i=n(o("react")),s=(n(o("./node_modules/prop-types/index.js")),n(o("./node_modules/classnames/index.js"))),d=n(o("./node_modules/@material-ui/core/styles/withStyles.js")),u=o("./node_modules/@material-ui/core/styles/colorManipulator.js"),c=n(o("./node_modules/@material-ui/core/ButtonBase/index.js")),p=o("./node_modules/@material-ui/core/utils/helpers.js"),m=function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),width:48,height:48,padding:0,borderRadius:"50%",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,u.fade)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}};function h(e){var t,o=e.children,n=e.classes,d=e.className,u=e.color,m=e.disabled,h=(0,l.default)(e,["children","classes","className","color","disabled"]);return i.default.createElement(c.default,(0,a.default)({className:(0,s.default)(n.root,(t={},(0,r.default)(t,n["color".concat((0,p.capitalize)(u))],"default"!==u),(0,r.default)(t,n.disabled,m),t),d),centerRipple:!0,focusRipple:!0,disabled:m},h),i.default.createElement("span",{className:n.label},o))}t.styles=m,h.propTypes={},h.defaultProps={color:"default",disabled:!1};var b=(0,d.default)(m,{name:"MuiIconButton"})(h);t.default=b},"./node_modules/@material-ui/core/IconButton/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(o("./node_modules/@material-ui/core/IconButton/IconButton.js"))},"./node_modules/@material-ui/core/Switch/Switch.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/builtin/extends.js")),r=n(o("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),l=n(o("react")),i=(n(o("./node_modules/prop-types/index.js")),n(o("./node_modules/classnames/index.js"))),s=n(o("./node_modules/@material-ui/core/styles/withStyles.js")),d=o("./node_modules/@material-ui/core/utils/helpers.js"),u=n(o("./node_modules/@material-ui/core/internal/SwitchBase.js")),c=function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};function p(e){var t=e.classes,o=e.className,n=e.color,s=(0,r.default)(e,["classes","className","color"]);return l.default.createElement("span",{className:(0,i.default)(t.root,o)},l.default.createElement(u.default,(0,a.default)({icon:l.default.createElement("span",{className:t.icon}),classes:{root:(0,i.default)(t.switchBase,t["color".concat((0,d.capitalize)(n))]),checked:t.checked,disabled:t.disabled},checkedIcon:l.default.createElement("span",{className:(0,i.default)(t.icon,t.iconChecked)})},s)),l.default.createElement("span",{className:t.bar}))}t.styles=c,p.propTypes={},p.defaultProps={color:"secondary"};var m=(0,s.default)(c,{name:"MuiSwitch"})(p);t.default=m},"./node_modules/@material-ui/core/Switch/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=n(o("./node_modules/@material-ui/core/Switch/Switch.js"))},"./node_modules/@material-ui/core/internal/SwitchBase.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/builtin/extends.js")),r=n(o("./node_modules/@babel/runtime/helpers/builtin/defineProperty.js")),l=n(o("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),i=n(o("./node_modules/@babel/runtime/helpers/builtin/classCallCheck.js")),s=n(o("./node_modules/@babel/runtime/helpers/builtin/createClass.js")),d=n(o("./node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js")),u=n(o("./node_modules/@babel/runtime/helpers/builtin/inherits.js")),c=n(o("react")),p=n(o("./node_modules/prop-types/index.js")),m=n(o("./node_modules/classnames/index.js")),h=n(o("./node_modules/@material-ui/core/styles/withStyles.js")),b=n(o("./node_modules/@material-ui/core/IconButton/index.js")),f={root:{display:"inline-flex",alignItems:"center",transition:"none","&:hover":{backgroundColor:"transparent"}},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}};t.styles=f;var y=function(e){function t(e){var o;return(0,i.default)(this,t),(o=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={},o.input=null,o.isControlled=null,o.handleFocus=function(e){o.props.onFocus&&o.props.onFocus(e);var t=o.context.muiFormControl;t&&t.onFocus&&t.onFocus(e)},o.handleBlur=function(e){o.props.onBlur&&o.props.onBlur(e);var t=o.context.muiFormControl;t&&t.onBlur&&t.onBlur(e)},o.handleInputChange=function(e){var t=e.target.checked;o.isControlled||o.setState({checked:t}),o.props.onChange&&o.props.onChange(e,t)},o.isControlled=null!=e.checked,o.isControlled||(o.state.checked=void 0!==e.defaultChecked&&e.defaultChecked),o}return(0,u.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e,t=this.props,o=t.checked,n=t.checkedIcon,i=t.classes,s=t.className,d=t.disabled,u=t.icon,p=t.id,h=t.inputProps,f=t.inputRef,y=t.name,_=(t.onBlur,t.onChange,t.onFocus,t.tabIndex),j=t.type,v=t.value,g=(0,l.default)(t,["checked","checkedIcon","classes","className","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","tabIndex","type","value"]),k=this.context.muiFormControl,w=d;k&&void 0===w&&(w=k.disabled);var C=this.isControlled?o:this.state.checked,x="checkbox"===j||"radio"===j;return c.default.createElement(b.default,(0,a.default)({component:"span",className:(0,m.default)(i.root,(e={},(0,r.default)(e,i.checked,C),(0,r.default)(e,i.disabled,w),e),s),disabled:w,tabIndex:null,role:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur},g),C?n:u,c.default.createElement("input",(0,a.default)({id:x&&p,type:j,name:y,checked:C,onChange:this.handleInputChange,className:i.input,disabled:w,tabIndex:_,value:v,ref:f},h)))}}]),t}(c.default.Component);y.propTypes={},y.defaultProps={type:"checkbox"},y.contextTypes={muiFormControl:p.default.object};var _=(0,h.default)(f,{name:"MuiSwitchBase"})(y);t.default=_},"./node_modules/@material-ui/core/utils/helpers.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){0;return e.charAt(0).toUpperCase()+e.slice(1)},t.contains=r,t.findIndex=l,t.find=function(e,t){var o=l(e,t);return o>-1?e[o]:void 0},t.createChainedFunction=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.reduce(function(e,t){return null==t?e:function(){for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}},function(){})};var a=n(o("./node_modules/@babel/runtime/helpers/builtin/typeof.js"));n(o("./node_modules/@material-ui/core/node_modules/warning/warning.js"));function r(e,t){return Object.keys(t).every(function(o){return e.hasOwnProperty(o)&&e[o]===t[o]})}function l(e,t){for(var o=(0,a.default)(t),n=0;n<e.length;n+=1){if("function"===o&&!0==!!t(e[n],n,e))return n;if("object"===o&&r(e[n],t))return n;if(-1!==["string","number","boolean"].indexOf(o))return e.indexOf(t)}return-1}}}]);