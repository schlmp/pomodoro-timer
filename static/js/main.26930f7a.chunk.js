(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),i=n(8),r=n.n(i),c=(n(13),n(3)),l=n(4),o=n(1),u=n(6),d=n(5),h=(n(14),n(0)),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleClick",value:function(){this.props.handleClick()}},{key:"render",value:function(){return Object(h.jsx)("button",{disabled:this.props.disabled,className:"TimerButton",onClick:this.handleClick,children:this.props.text})}}]),n}(a.Component),m=(n(16),n.p+"static/media/bell.ddf1e098.mp3"),b=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={seconds:1500,intervalName:"Work",play:!0},a.setWorkInterval=a.setInterval.bind(Object(o.a)(a),{name:"Work",sec:1500}),a.setShortBreakInterval=a.setInterval.bind(Object(o.a)(a),{name:"Short Break",sec:300}),a.setLongBreakInterval=a.setInterval.bind(Object(o.a)(a),{name:"Long Break",sec:1200}),a.playPause=a.playPause.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"setInterval",value:function(t){this.setState((function(e){return{seconds:t.sec,intervalName:t.name}})),this.sound.pause(),this.sound.currentTime=0}},{key:"playPause",value:function(){var t=this;this.state.play?(this.setState((function(t){return{play:!1}})),clearInterval(this.interval)):(this.setState((function(t){return{play:!0}})),this.interval=setInterval((function(){return t.tick()}),1e3))}},{key:"tick",value:function(){var t=this;this.setState((function(e){return{seconds:t.state.seconds-1}})),this.state.seconds<=0&&(clearInterval(this.interval),this.setState((function(t){return{play:!1}})),this.sound.play())}},{key:"formatTime",value:function(t){var e=Math.floor(t/60),n=t%60;return e<10&&(e="0"+e),n<10&&(n="0"+n),e+":"+n}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.tick()}),1e3),this.sound=new Audio(m)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state.seconds,e=this.state.play,n=this.state.intervalName,a=this.formatTime(t);return document.title=a+" Pomodoro",Object(h.jsxs)("div",{className:"PomodoroApp",children:[Object(h.jsxs)("div",{className:"Timer",children:[Object(h.jsx)("div",{className:"IntervalName",children:n}),Object(h.jsx)("div",{className:"Timestamp",children:a})]}),Object(h.jsxs)("div",{className:"Controls",children:[Object(h.jsx)(v,{disabled:t<=0,text:e?"Pause":"Play",handleClick:this.playPause}),Object(h.jsx)(v,{text:"25 Min.",handleClick:this.setWorkInterval}),Object(h.jsx)(v,{text:"5 Min.",handleClick:this.setShortBreakInterval}),Object(h.jsx)(v,{text:"20 Min.",handleClick:this.setLongBreakInterval})]})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.26930f7a.chunk.js.map