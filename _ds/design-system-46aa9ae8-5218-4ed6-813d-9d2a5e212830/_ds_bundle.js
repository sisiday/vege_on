/* @ds-bundle: {"format":4,"namespace":"DesignSystem_46aa9a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"PriceCard","sourcePath":"components/display/PriceCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d77d092e232f","components/display/Badge.jsx":"9127a53859a3","components/display/Card.jsx":"c1d300816123","components/display/PriceCard.jsx":"3ad5dd0cd0ce","components/forms/Input.jsx":"f0c58a127c95","ui_kits/landing/sections.jsx":"95514b16c389","ui_kits/landing/shared.jsx":"87037df0d464"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_46aa9a = window.DesignSystem_46aa9a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    d: {
      background: 'var(--primary-500)',
      color: 'var(--bg-base)',
      borderColor: 'var(--primary-500)'
    },
    h: {
      background: 'var(--primary-700)',
      borderColor: 'var(--primary-700)'
    },
    x: {
      background: 'var(--neutral-200)',
      color: 'var(--neutral-400)',
      borderColor: 'var(--neutral-200)'
    }
  },
  secondary: {
    d: {
      background: '#FFFFFF',
      color: 'var(--primary-500)',
      borderColor: 'var(--primary-500)'
    },
    h: {
      background: 'var(--primary-50)',
      color: 'var(--primary-700)',
      borderColor: 'var(--primary-700)'
    },
    x: {
      background: '#FFFFFF',
      color: 'var(--neutral-400)',
      borderColor: 'var(--neutral-200)'
    }
  },
  ghost: {
    d: {
      background: 'transparent',
      color: 'var(--primary-500)',
      borderColor: 'transparent'
    },
    h: {
      background: 'var(--primary-50)',
      color: 'var(--primary-700)'
    },
    x: {
      background: 'transparent',
      color: 'var(--neutral-400)',
      borderColor: 'transparent'
    }
  },
  inverse: {
    d: {
      background: 'var(--bg-base)',
      color: 'var(--primary-500)',
      borderColor: 'var(--bg-base)'
    },
    h: {
      background: 'var(--primary-50)',
      color: 'var(--primary-700)',
      borderColor: 'var(--primary-50)'
    },
    x: {
      background: 'var(--neutral-200)',
      color: 'var(--neutral-400)',
      borderColor: 'var(--neutral-200)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: size === 'sm' ? 38 : 44,
    padding: '0 20px',
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    transition: 'background-color .15s, color .15s, border-color .15s',
    ...v.d,
    ...(hover && !disabled ? v.h : {}),
    ...(disabled ? v.x : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: s
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  green: ['var(--primary-50)', 'var(--primary-700)'],
  carrot: ['var(--secondary-carrot-50)', 'var(--secondary-carrot-700)'],
  butter: ['var(--secondary-butter)', 'var(--secondary-butter-ink)'],
  neutral: ['var(--neutral-100)', 'var(--neutral-800)']
};
function Badge({
  tone = 'green',
  shape = 'pill',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.4,
      padding: '4px 10px',
      borderRadius: shape === 'tag' ? 'var(--radius-sm)' : 'var(--radius-pill)',
      background: bg,
      color: fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  padding = 'var(--space-lg)',
  children,
  style,
  ...rest
}) {
  const e = variant === 'emphasis';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: e ? 'var(--primary-500)' : '#FFFFFF',
      color: e ? 'var(--bg-base)' : 'var(--neutral-800)',
      border: e ? '1px solid var(--primary-500)' : '1px solid var(--neutral-100)',
      borderRadius: 'var(--radius-lg)',
      padding,
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/PriceCard.jsx
try { (() => {
const fmt = n => typeof n === 'number' ? n.toLocaleString('ko-KR') : n;
function PriceCard({
  item,
  unit,
  price,
  change,
  note,
  badge = '오늘의 시세',
  badgeTone = 'green',
  cta = '거래 문의하기',
  ctaVariant = 'primary',
  onCta,
  style
}) {
  const down = typeof change === 'number' && change < 0,
    up = typeof change === 'number' && change > 0;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone
  }, badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.4,
      color: 'var(--neutral-900)',
      margin: '16px 0 4px'
    }
  }, item, unit && /*#__PURE__*/React.createElement("span", null, " (", unit, ")")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 32,
      fontWeight: 800,
      color: 'var(--primary-500)',
      letterSpacing: '-0.01em'
    }
  }, fmt(price)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--neutral-600)'
    }
  }, "\uC6D0"), down && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--secondary-carrot)'
    }
  }, "\u25BC ", fmt(-change)), up && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-num)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--neutral-600)'
    }
  }, "\u25B2 ", fmt(change))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-600)',
      lineHeight: 1.6,
      margin: '8px 0 0'
    }
  }, note), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  error,
  hint,
  disabled = false,
  style,
  inputStyle,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const iid = id || React.useId();
  const border = error ? 'var(--error)' : focus ? 'var(--primary-500)' : 'var(--neutral-200)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--neutral-800)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: iid,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      height: 44,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      background: disabled ? 'var(--bg-base)' : '#FFFFFF',
      fontFamily: 'inherit',
      fontSize: 15,
      color: disabled ? 'var(--neutral-400)' : 'var(--neutral-900)',
      border: '1.5px solid ' + border,
      boxShadow: focus && !error ? '0 0 0 3px var(--primary-100)' : 'none',
      outline: 'none',
      boxSizing: 'border-box',
      width: '100%',
      transition: 'border-color .15s, box-shadow .15s',
      ...inputStyle
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--neutral-600)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections.jsx
try { (() => {
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "\uBC18\uC5EC\uB18D\uC0B0\uBB3C\uB3C4\uB9E4\uC2DC\uC7A5 \uC911\uC559\uCCAD\uACFC 112\uBC88"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: 'var(--neutral-900)',
      margin: 0
    }
  }, "\uBD80\uC0B0 \uC57C\uCC44\uC758 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary-500)'
    }
  }, "\uC911\uC2EC"), /*#__PURE__*/React.createElement("br", null), "\uC57C\uCC44\uC628"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--neutral-800)',
      margin: 0,
      maxWidth: 440
    }
  }, "\uC0C8\uBCBD\uC5D0 \uC9C1\uC811 \uACBD\uB9E4\uBC1B\uC740 \uBB3C\uAC74\uC744 \uADF8\uB0A0 \uB0A9\uD488\uD574 \uB4DC\uB824\uC694.", /*#__PURE__*/React.createElement("br", null), "\uC911\uAC04 \uC720\uD1B5 \uC5C6\uC774 \uB2F9\uC77C \uC2DC\uC138 \uADF8\uB300\uB85C \uBC1B\uC544\uBCF4\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav('inquiry')
  }, "\uAC70\uB798 \uBB38\uC758\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('prices')
  }, "\uC2DC\uC138\uD45C \uBCF4\uAE30"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "\uC2E4\uC0AC \uC0AC\uC9C4 \xB7 \uC0C8\uBCBD \uACBD\uB9E4\uC7A5 \uCC44\uC18C",
    style: {
      height: 400
    }
  })));
}
const VALUES = [['Leaf', '신선함', '새벽에 직접 경매받은 물건을 그날 납품해 드려요.'], ['Receipt', '정직한 시세', '중간 유통 없이 당일 시세를 그대로 반영하고 공유해요.'], ['Handshake', '든든한 동반자', '품질검수부터 100% 교환·환불까지 책임져 드려요.']];
function Values() {
  return /*#__PURE__*/React.createElement("section", {
    id: "values",
    style: {
      padding: '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\uC57C\uCC44\uC628\uC774 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary-500)'
    }
  }, "\uC57D\uC18D"), "\uB4DC\uB824\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 24
    }
  }, VALUES.map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--neutral-800)'
    }
  }, d))))));
}
const PRICES = [{
  cat: '근채류',
  item: '양파 1망',
  unit: '15kg',
  price: 13500,
  change: -1200,
  note: '작황이 좋아 이번 주 저렴하게 들어왔어요.',
  badge: '가격 하락',
  tone: 'carrot'
}, {
  cat: '근채류',
  item: '대파 1단',
  unit: '1kg',
  price: 3200,
  change: 0,
  note: '시세 변동 없이 꾸준해요.'
}, {
  cat: '엽채류',
  item: '청상추 1박스',
  unit: '4kg',
  price: 18000,
  change: 900,
  note: '비 소식에 조금 올랐어요.'
}, {
  cat: '엽채류',
  item: '깻잎 1박스',
  unit: '2kg',
  price: 21000,
  change: 0,
  note: '오늘 새벽 물건이 좋아요.'
}, {
  cat: '과채류',
  item: '청양고추 1박스',
  unit: '10kg',
  price: 42000,
  change: 0,
  note: '식당용 대용량으로 받아보세요.'
}, {
  cat: '과채류',
  item: '애호박 1박스',
  unit: '8kg',
  price: 15500,
  change: 0,
  note: '모양 고른 상품으로 골라 드려요.'
}];
function Prices({
  onNav
}) {
  const [cat, setCat] = React.useState('전체');
  const cats = ['전체', '근채류', '엽채류', '과채류'];
  const list = PRICES.filter(p => cat === '전체' || p.cat === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "prices",
    style: {
      padding: '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "\uC624\uB298\uC758 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary-500)'
    }
  }, "\uC2DC\uC138")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--neutral-600)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: ycNum
  }, "2026.10.22"), " \uC0C8\uBCBD \uACBD\uB9E4 \uAE30\uC900")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Button, {
    key: c,
    size: "sm",
    variant: c === cat ? 'secondary' : 'ghost',
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 24
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PriceCard, {
    key: p.item,
    item: p.item,
    unit: p.unit,
    price: p.price,
    change: p.change || undefined,
    note: p.note,
    badge: p.badge || '오늘의 시세',
    badgeTone: p.tone || 'green',
    cta: "\uBB38\uC758\uD558\uAE30",
    ctaVariant: "ghost",
    onCta: () => onNav('inquiry')
  })))));
}
function Inquiry() {
  const [f, setF] = React.useState({
    name: '',
    phone: ''
  });
  const [err, setErr] = React.useState({});
  const [done, setDone] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const d = f.phone.replace(/\D/g, '');
    const er = {};
    if (!f.name.trim()) er.name = '상호명을 입력해 주세요';
    if (d.length < 10) er.phone = '연락처를 끝까지 입력해 주세요';
    setErr(er);
    if (!Object.keys(er).length) setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "inquiry",
    style: {
      padding: '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-inverse)',
      borderRadius: 16,
      padding: 40,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "butter"
  }, "\uAC70\uB798\uCC98 \uD61C\uD0DD"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      color: 'var(--bg-base)',
      fontSize: 36,
      lineHeight: 1.3,
      letterSpacing: '-0.02em'
    }
  }, "\uCCAB \uAC70\uB798, \uBD80\uB2F4 \uC5C6\uC774 \uC2DC\uC791\uD558\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--primary-100)',
      margin: 0
    }
  }, "\uBC1B\uC544\uBCF4\uC2DC\uACE0 \uC544\uB2C8\uB2E4 \uC2F6\uC73C\uBA74 100% \uAD50\uD658\xB7\uD658\uBD88\uD574 \uB4DC\uB824\uC694.", /*#__PURE__*/React.createElement("br", null), "\uC0C1\uB2F4\uBB38\uC758 ", /*#__PURE__*/React.createElement("span", {
    style: {
      ...ycNum,
      color: 'var(--bg-base)',
      fontWeight: 700
    }
  }, "010-2820-0050"))), /*#__PURE__*/React.createElement(Card, null, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "BadgeCheck",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--neutral-900)'
    }
  }, "\uBB38\uC758 \uC811\uC218\uB410\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.7
    }
  }, "\uC624\uB298 \uC548\uC5D0 ", f.name, " \uC0AC\uC7A5\uB2D8\uAED8 \uC5F0\uB77D\uB4DC\uB9B4\uAC8C\uC694."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => {
      setDone(false);
      setF({
        name: '',
        phone: ''
      });
    }
  }, "\uB2E4\uC2DC \uC791\uC131\uD558\uAE30")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC0C1\uD638\uBA85",
    placeholder: "\uC608: \uD574\uC6B4\uB300 \uAD6D\uBC25\uC9D1",
    value: f.name,
    error: err.name,
    onChange: e => setF({
      ...f,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uC5F0\uB77D\uCC98",
    placeholder: "010-0000-0000",
    inputMode: "tel",
    value: f.phone,
    error: err.phone,
    onChange: e => setF({
      ...f,
      phone: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "\uAC70\uB798 \uBB38\uC758\uD558\uAE30"))))));
}
Object.assign(window, {
  Hero,
  Values,
  Prices,
  Inquiry
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/shared.jsx
try { (() => {
const {
  Button,
  Input,
  Card,
  Badge,
  PriceCard
} = window.DesignSystem_46aa9a;
function Icon({
  name,
  size = 24,
  color = 'var(--primary-500)',
  stroke = 2,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const node = lucide.icons[name];
    if (!node) return;
    const svg = lucide.createElement(node);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke-width', stroke);
    svg.style.display = 'block';
    el.appendChild(svg);
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  });
}
function PhotoSlot({
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--primary-50)',
      border: '1px dashed var(--primary-300)',
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-700)',
      fontSize: 13,
      fontWeight: 500,
      textAlign: 'center',
      padding: 16,
      ...style
    }
  }, label);
}
const wrap = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 40px',
  boxSizing: 'border-box'
};
const h2 = {
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  color: 'var(--neutral-900)',
  margin: 0
};
const ycNum = {
  fontFamily: 'var(--font-num)',
  fontVariantNumeric: 'tabular-nums'
};
function Header({
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--bg-base)',
      borderBottom: '1px solid var(--neutral-100)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--primary-500)',
      letterSpacing: '-0.02em'
    }
  }, "\uC57C\uCC44\uC628")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav('prices')
  }, "\uC624\uB298\uC758 \uC2DC\uC138"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav('values')
  }, "\uC57C\uCC44\uC628 \uC57D\uC18D"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Phone",
      size: 16
    }),
    onClick: () => onNav('inquiry')
  }, "010-2820-0050"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--neutral-100)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--primary-500)'
    }
  }, "\uC57C\uCC44\uC628"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--neutral-600)',
      marginTop: 6,
      lineHeight: 1.6
    }
  }, "\uBD80\uC0B0\uAD11\uC5ED\uC2DC \uD574\uC6B4\uB300\uAD6C \uC218\uC601\uAC15\uBCC0\uB300\uB85C 626, \uBC18\uC5EC\uB18D\uC0B0\uBB3C\uB3C4\uB9E4\uC2DC\uC7A5 \uC911\uC559\uCCAD\uACFC 112\uBC88", /*#__PURE__*/React.createElement("br", null), "\uC0C1\uB2F4\uBB38\uC758 ", /*#__PURE__*/React.createElement("span", {
    style: ycNum
  }, "010-2820-0050"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--primary-500)',
      alignSelf: 'flex-end'
    }
  }, "\uB2F9\uC77C \uACBD\uB9E4\uC758 \uC2E0\uC120\uD568\uC744 \uADF8\uB300\uB85C \uC57C\uCC44ON")));
}
Object.assign(window, {
  Button,
  Input,
  Card,
  Badge,
  PriceCard,
  Icon,
  PhotoSlot,
  wrap,
  h2,
  ycNum,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Input = __ds_scope.Input;

})();
