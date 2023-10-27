/*! For license information please see main.08a2bcd8.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunkproduction_project =
  self.webpackChunkproduction_project || []).push([
  [179],
  {
    './config/storybook/preview.js-generated-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      var preview_namespaceObject = {}
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          parameters: () => parameters,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        )
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js',
        ),
        client = __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        styles = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(styles.Z, options)
      styles.Z && styles.Z.locals && styles.Z.locals
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        RouterDecorator = function RouterDecorator(story) {
          return (0, jsx_runtime.jsx)(dist.VK, { children: story() })
        }
      RouterDecorator.displayName = 'RouterDecorator'
      try {
        ;(RouterDecorator.displayName = 'RouterDecorator'),
          (RouterDecorator.__docgenInfo = {
            description: '',
            displayName: 'RouterDecorator',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator'
            ] = {
              docgenInfo: RouterDecorator.__docgenInfo,
              name: 'RouterDecorator',
              path: 'src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      ;(0, client.addDecorator)(function StyleDecorator(story) {
        return story()
      }),
        (0, client.addDecorator)((0, ThemeDecorator.F)(ThemeProvider.Q2.LIGHT)),
        (0, client.addDecorator)(RouterDecorator),
        Object.keys(preview_namespaceObject).forEach(function (key) {
          var value = preview_namespaceObject[key]
          switch (key) {
            case 'args':
              return (0, ClientApi.uc)(value)
            case 'argTypes':
              return (0, ClientApi.v9)(value)
            case 'decorators':
              return value.forEach(function (decorator) {
                return (0, ClientApi.$9)(decorator, !1)
              })
            case 'loaders':
              return value.forEach(function (loader) {
                return (0, ClientApi.HZ)(loader, !1)
              })
            case 'parameters':
              return (0, ClientApi.h1)(
                (function _objectSpread(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {}
                    i % 2
                      ? ownKeys(Object(source), !0).forEach(function (key) {
                          _defineProperty(target, key, source[key])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          target,
                          Object.getOwnPropertyDescriptors(source),
                        )
                      : ownKeys(Object(source)).forEach(function (key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key),
                          )
                        })
                  }
                  return target
                })({}, value),
                !1,
              )
            case 'argTypesEnhancers':
              return value.forEach(function (enhancer) {
                return (0, ClientApi.My)(enhancer)
              })
            case 'argsEnhancers':
              return value.forEach(function (enhancer) {
                return (0, ClientApi._C)(enhancer)
              })
            case 'render':
              return (0, ClientApi.$P)(value)
            case 'globals':
            case 'globalTypes':
              var v = {}
              return (v[key] = value), (0, ClientApi.h1)(v, !1)
            case '__namedExportsOrder':
            case 'decorateStory':
            case 'renderToDOM':
              return null
            default:
              return console.log(key + ' was not supported :( !')
          }
        })
    },
    './src/pages/AboutPage/ui/AboutPage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => AboutPage_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        )
      var useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        AboutPage = function AboutPage() {
          var t = (0, useTranslation.$)('about').t
          return (0, jsx_runtime.jsx)('div', { children: t('about') })
        }
      AboutPage.displayName = 'AboutPage'
      const ui_AboutPage = AboutPage
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        )
      const AboutPage_stories = {
        title: 'pages/AboutPage',
        component: ui_AboutPage,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_AboutPage, {})
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          { storySource: { source: '(args) => <AboutPage />' } },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <AboutPage />' } },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/pages/MainPage/ui/MainPage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => MainPage_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.set-prototype-of.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-prototype-of.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.reflect.construct.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.create.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.to-primitive.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.date.to-primitive.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.number.constructor.js',
        )
      var react = __webpack_require__('./node_modules/react/index.js'),
        PageError = __webpack_require__(
          './src/widgets/PageError/ui/PageError.tsx',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i]
          ;(descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(
              target,
              ((arg = descriptor.key),
              (key = void 0),
              'symbol' ==
              typeof (key = (function _toPrimitive(input, hint) {
                if ('object' != typeof input || null === input) return input
                var prim = input[Symbol.toPrimitive]
                if (void 0 !== prim) {
                  var res = prim.call(input, hint || 'default')
                  if ('object' != typeof res) return res
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.',
                  )
                }
                return ('string' === hint ? String : Number)(input)
              })(arg, 'string'))
                ? key
                : String(key)),
              descriptor,
            )
        }
        var arg, key
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o
              }),
          _setPrototypeOf(o, p)
        )
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor
            result = Reflect.construct(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return (function _possibleConstructorReturn(self, call) {
            if (call && ('object' == typeof call || 'function' == typeof call))
              return call
            if (void 0 !== call)
              throw new TypeError(
                'Derived constructors may only return object or undefined',
              )
            return (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                )
              return self
            })(self)
          })(this, result)
        }
      }
      function _getPrototypeOf(o) {
        return (
          (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }),
          _getPrototypeOf(o)
        )
      }
      var ErrorBoundary = (function (_React$Component) {
        !(function _inherits(subClass, superClass) {
          if ('function' != typeof superClass && null !== superClass)
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          ;(subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: { value: subClass, writable: !0, configurable: !0 },
            },
          )),
            Object.defineProperty(subClass, 'prototype', { writable: !1 }),
            superClass && _setPrototypeOf(subClass, superClass)
        })(ErrorBoundary, _React$Component)
        var _super = _createSuper(ErrorBoundary)
        function ErrorBoundary(props) {
          var _this
          return (
            (function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function')
            })(this, ErrorBoundary),
            ((_this = _super.call(this, props)).state = { hasError: !1 }),
            _this
          )
        }
        return (
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
              Constructor
            )
          })(
            ErrorBoundary,
            [
              {
                key: 'componentDidCatch',
                value: function componentDidCatch(error, errorInfo) {
                  console.log(error, errorInfo)
                },
              },
              {
                key: 'render',
                value: function render() {
                  var hasError = this.state.hasError,
                    children = this.props.children
                  return hasError
                    ? (0, jsx_runtime.jsx)(react.Suspense, {
                        fallback: '',
                        children: (0, jsx_runtime.jsx)(PageError.S, {}),
                      })
                    : children
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromError',
                value: function getDerivedStateFromError(error) {
                  return { hasError: !0 }
                },
              },
            ],
          ),
          ErrorBoundary
        )
      })(react.Component)
      try {
        ;(ErrorBoundary.displayName = 'ErrorBoundary'),
          (ErrorBoundary.__docgenInfo = {
            description: '',
            displayName: 'ErrorBoundary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary'
            ] = {
              docgenInfo: ErrorBoundary.__docgenInfo,
              name: 'ErrorBoundary',
              path: 'src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx#ErrorBoundary',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(
        './node_modules/core-js/modules/es.array.is-array.js',
      ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
      var Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        )
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return
                  _n = !1
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var BugButton = function BugButton() {
        var _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          error = _useState2[0],
          setError = _useState2[1],
          t = (0, useTranslation.$)().t
        return (
          (0, react.useEffect)(
            function () {
              if (error) throw new Error('Test error')
            },
            [error],
          ),
          (0, jsx_runtime.jsx)(Button.z, {
            onClick: function throwErr() {
              return setError(!0)
            },
            children: t('throw_error'),
          })
        )
      }
      BugButton.displayName = 'BugButton'
      var MainPage = function MainPage() {
        var t = (0, useTranslation.$)('main').t
        return (0, jsx_runtime.jsxs)('div', {
          children: [(0, jsx_runtime.jsx)(BugButton, {}), t('main')],
        })
      }
      MainPage.displayName = 'MainPage'
      const ui_MainPage = MainPage
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        )
      const MainPage_stories = {
        title: 'pages/MainPage',
        component: ui_MainPage,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(ui_MainPage, {})
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          { storySource: { source: '(args) => <MainPage />' } },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <MainPage />' } },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => NotFoundPage_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        NotFoundPage_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(NotFoundPage_module.Z, options)
      const ui_NotFoundPage_module =
        NotFoundPage_module.Z && NotFoundPage_module.Z.locals
          ? NotFoundPage_module.Z.locals
          : void 0
      var useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        NotFoundPage = function NotFoundPage(_ref) {
          var className = _ref.className,
            t = (0, useTranslation.$)().t
          return (0, jsx_runtime.jsx)('div', {
            className: (0, classNames.A)(
              ui_NotFoundPage_module.NotFoundPage,
              {},
              [className],
            ),
            children: t('not_found_page'),
          })
        }
      NotFoundPage.displayName = 'NotFoundPage'
      try {
        ;(NotFoundPage.displayName = 'NotFoundPage'),
          (NotFoundPage.__docgenInfo = {
            description: '',
            displayName: 'NotFoundPage',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage'
            ] = {
              docgenInfo: NotFoundPage.__docgenInfo,
              name: 'NotFoundPage',
              path: 'src/pages/NotFoundPage/ui/NotFoundPage.tsx#NotFoundPage',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        )
      const NotFoundPage_stories = {
        title: 'pages/NotFoundPage',
        component: NotFoundPage,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(NotFoundPage, Object.assign({}, args))
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <NotFoundPage {...args} />\r\n)',
            },
          },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <NotFoundPage {...args} />\r\n)',
            },
          },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/shared/ui/AppLink/AppLink.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          PrimaryDark: () => PrimaryDark,
          Secondary: () => Secondary,
          SecondaryDark: () => SecondaryDark,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var _AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/shared/ui/AppLink/AppLink.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'shared/AppLink',
        component: _AppLink__WEBPACK_IMPORTED_MODULE_2__.F,
        argTypes: { backgroundColor: { control: 'color' } },
        args: { to: '/' },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _AppLink__WEBPACK_IMPORTED_MODULE_2__.F,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Primary = Template.bind({})
      Primary.args = {
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY,
        children: 'link',
      }
      var Secondary = Template.bind({})
      Secondary.args = {
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY,
        children: 'link',
      }
      var PrimaryDark = Template.bind({})
      ;(PrimaryDark.args = {
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.PRIMARY,
        children: 'link',
      }),
        (PrimaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ])
      var SecondaryDark = Template.bind({})
      ;(SecondaryDark.args = {
        theme: _AppLink__WEBPACK_IMPORTED_MODULE_2__.u.SECONDARY,
        children: 'link',
      }),
        (SecondaryDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ]),
        (Primary.parameters = Object.assign(
          { storySource: { source: '(args) => <AppLink {...args} />' } },
          Primary.parameters,
        )),
        (Secondary.parameters = Object.assign(
          { storySource: { source: '(args) => <AppLink {...args} />' } },
          Secondary.parameters,
        )),
        (PrimaryDark.parameters = Object.assign(
          { storySource: { source: '(args) => <AppLink {...args} />' } },
          PrimaryDark.parameters,
        )),
        (SecondaryDark.parameters = Object.assign(
          { storySource: { source: '(args) => <AppLink {...args} />' } },
          SecondaryDark.parameters,
        ))
      var __namedExportsOrder = [
        'Primary',
        'Secondary',
        'PrimaryDark',
        'SecondaryDark',
      ]
    },
    './src/shared/ui/Button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Clear: () => Clear,
          Outlined: () => Outlined,
          OutlinedDark: () => OutlinedDark,
          Primary: () => Primary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/shared/ui/Button/Button.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'shared/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_3__.z,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_3__.z,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Primary = Template.bind({})
      Primary.args = { children: 'Primary' }
      var Clear = Template.bind({})
      Clear.args = {
        children: 'CLEAR',
        theme: _Button__WEBPACK_IMPORTED_MODULE_3__.U.CLEAR,
      }
      var Outlined = Template.bind({})
      Outlined.args = {
        children: 'Outlined',
        theme: _Button__WEBPACK_IMPORTED_MODULE_3__.U.OUTLINE,
      }
      var OutlinedDark = Template.bind({})
      ;(OutlinedDark.args = {
        children: 'Outlined',
        theme: _Button__WEBPACK_IMPORTED_MODULE_3__.U.OUTLINE,
      }),
        (OutlinedDark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_4__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Q2.DARK,
          ),
        ]),
        (Primary.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Primary.parameters,
        )),
        (Clear.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Clear.parameters,
        )),
        (Outlined.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          Outlined.parameters,
        )),
        (OutlinedDark.parameters = Object.assign(
          { storySource: { source: '(args) => <Button {...args} />' } },
          OutlinedDark.parameters,
        ))
      var __namedExportsOrder = ['Primary', 'Clear', 'Outlined', 'OutlinedDark']
    },
    './src/shared/ui/Loader/Loader.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/shared/ui/Loader/Loader.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'shared/Loader',
        component: _Loader__WEBPACK_IMPORTED_MODULE_2__.a,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _Loader__WEBPACK_IMPORTED_MODULE_2__.a,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ]),
        (Light.parameters = Object.assign(
          { storySource: { source: '(args) => <Loader {...args} />' } },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <Loader {...args} />' } },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var _LangSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/widgets/LangSwitcher/ui/LangSwitcher.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'widgets/LangSwitcher',
        component: _LangSwitcher__WEBPACK_IMPORTED_MODULE_2__.k,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _LangSwitcher__WEBPACK_IMPORTED_MODULE_2__.k,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <LangSwitcher {...args} />\r\n)',
            },
          },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <LangSwitcher {...args} />\r\n)',
            },
          },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/Navbar/ui/Navbar.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Navbar_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Navbar_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(Navbar_module.Z, options)
      const ui_Navbar_module =
        Navbar_module.Z && Navbar_module.Z.locals
          ? Navbar_module.Z.locals
          : void 0
      var AppLink = __webpack_require__('./src/shared/ui/AppLink/AppLink.tsx'),
        useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        Navbar = function Navbar(_ref) {
          var className = _ref.className,
            t = (0, useTranslation.$)().t
          return (0, jsx_runtime.jsx)('div', {
            className: (0, classNames.A)(ui_Navbar_module.Navbar, {}, [
              className,
            ]),
            children: (0, jsx_runtime.jsxs)('div', {
              className: ui_Navbar_module.links,
              children: [
                ' ',
                (0, jsx_runtime.jsx)(AppLink.F, {
                  theme: AppLink.u.SECONDARY,
                  to: '/',
                  className: ui_Navbar_module.mainLink,
                  children: t('main_nav'),
                }),
                (0, jsx_runtime.jsx)(AppLink.F, {
                  theme: AppLink.u.SECONDARY,
                  to: '/about',
                  children: t('about_nav'),
                }),
              ],
            }),
          })
        }
      Navbar.displayName = 'Navbar'
      try {
        ;(Navbar.displayName = 'Navbar'),
          (Navbar.__docgenInfo = {
            description: '',
            displayName: 'Navbar',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/Navbar/ui/Navbar.tsx#Navbar'
            ] = {
              docgenInfo: Navbar.__docgenInfo,
              name: 'Navbar',
              path: 'src/widgets/Navbar/ui/Navbar.tsx#Navbar',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const Navbar_stories = {
        title: 'widgets/Navbar',
        component: Navbar,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Navbar, Object.assign({}, args))
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          { storySource: { source: '(args) => <Navbar {...args} />' } },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <Navbar {...args} />' } },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/PageError/ui/PageError.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var _PageError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/widgets/PageError/ui/PageError.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'widgets/PageError',
        component: _PageError__WEBPACK_IMPORTED_MODULE_2__.S,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _PageError__WEBPACK_IMPORTED_MODULE_2__.S,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <PageError {...args} />\r\n)',
            },
          },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <PageError {...args} />\r\n)',
            },
          },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/PageLoader/ui/PageLoader.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => PageLoader_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        PageLoader_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageLoader/ui/PageLoader.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(PageLoader_module.Z, options)
      const ui_PageLoader_module =
        PageLoader_module.Z && PageLoader_module.Z.locals
          ? PageLoader_module.Z.locals
          : void 0
      var Loader = __webpack_require__('./src/shared/ui/Loader/Loader.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        PageLoader = function PageLoader(_ref) {
          var className = _ref.className
          return (0, jsx_runtime.jsx)('div', {
            className: (0, classNames.A)(ui_PageLoader_module.PageLoader, {}, [
              className,
            ]),
            children: (0, jsx_runtime.jsx)(Loader.a, {}),
          })
        }
      PageLoader.displayName = 'PageLoader'
      try {
        ;(PageLoader.displayName = 'PageLoader'),
          (PageLoader.__docgenInfo = {
            description: '',
            displayName: 'PageLoader',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/PageLoader/ui/PageLoader.tsx#PageLoader'
            ] = {
              docgenInfo: PageLoader.__docgenInfo,
              name: 'PageLoader',
              path: 'src/widgets/PageLoader/ui/PageLoader.tsx#PageLoader',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        )
      const PageLoader_stories = {
        title: 'widgets/PageLoader',
        component: PageLoader,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(PageLoader, Object.assign({}, args))
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <PageLoader {...args} />\r\n)',
            },
          },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <PageLoader {...args} />\r\n)',
            },
          },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Sidebar_stories,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.is-array.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Sidebar_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(Sidebar_module.Z, options)
      const Sidebar_Sidebar_module =
        Sidebar_module.Z && Sidebar_module.Z.locals
          ? Sidebar_module.Z.locals
          : void 0
      var react = __webpack_require__('./node_modules/react/index.js'),
        ui_ThemeSwitcher = __webpack_require__(
          './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx',
        )
      try {
        ;(ThemeSwitcher.displayName = 'ThemeSwitcher'),
          (ThemeSwitcher.__docgenInfo = {
            description: '',
            displayName: 'ThemeSwitcher',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/ThemeSwitcher/index.tsx#ThemeSwitcher'
            ] = {
              docgenInfo: ThemeSwitcher.__docgenInfo,
              name: 'ThemeSwitcher',
              path: 'src/widgets/ThemeSwitcher/index.tsx#ThemeSwitcher',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var LangSwitcher = __webpack_require__(
          './src/widgets/LangSwitcher/ui/LangSwitcher.tsx',
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return
                  _n = !1
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var Sidebar = function Sidebar(_ref) {
        var _classNames,
          className = _ref.className,
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          collapsed = _useState2[0],
          setCollapsed = _useState2[1]
        return (0, jsx_runtime.jsxs)('div', {
          'data-testid': 'sidebar',
          className: (0, classNames.A)(
            Sidebar_Sidebar_module.Sidebar,
            ((_classNames = {}),
            (_classNames[Sidebar_Sidebar_module.collapsed] = collapsed),
            _classNames),
            [className],
          ),
          children: [
            (0, jsx_runtime.jsx)('button', {
              'data-testid': 'sidebar-toggle',
              onClick: function onToggle() {
                setCollapsed(function (prev) {
                  return !prev
                })
              },
              children: 'Toggle',
            }),
            (0, jsx_runtime.jsxs)('div', {
              className: Sidebar_Sidebar_module.switchers,
              children: [
                (0, jsx_runtime.jsx)(ui_ThemeSwitcher.O, {}),
                (0, jsx_runtime.jsx)(LangSwitcher.k, {
                  className: Sidebar_Sidebar_module.lang,
                }),
              ],
            }),
          ],
        })
      }
      Sidebar.displayName = 'Sidebar'
      try {
        ;(Sidebar.displayName = 'Sidebar'),
          (Sidebar.__docgenInfo = {
            description: '',
            displayName: 'Sidebar',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar'
            ] = {
              docgenInfo: Sidebar.__docgenInfo,
              name: 'Sidebar',
              path: 'src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var ThemeDecorator = __webpack_require__(
          './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
        ),
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        )
      const Sidebar_stories = {
        title: 'widgets/Sidebar',
        component: Sidebar,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(Sidebar, Object.assign({}, args))
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [(0, ThemeDecorator.F)(ThemeProvider.Q2.DARK)]),
        (Light.parameters = Object.assign(
          { storySource: { source: '(args) => <Sidebar {...args} />' } },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          { storySource: { source: '(args) => <Sidebar {...args} />' } },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Dark: () => Dark,
          Light: () => Light,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js',
        )
      var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx',
        ),
        shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx',
          ),
        app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./src/app/providers/ThemeProvider/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: 'widgets/ThemeSwitcher',
        component: _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.O,
        argTypes: { backgroundColor: { control: 'color' } },
      }
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_2__.O,
          Object.assign({}, args),
        )
      }
      Template.displayName = 'Template'
      var Light = Template.bind({})
      Light.args = {}
      var Dark = Template.bind({})
      ;(Dark.args = {}),
        (Dark.decorators = [
          (0,
          shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.F)(
            app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.Q2.DARK,
          ),
        ]),
        (Light.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <ThemeSwitcher {...args} />\r\n)',
            },
          },
          Light.parameters,
        )),
        (Dark.parameters = Object.assign(
          {
            storySource: {
              source: '(args) => (\r\n  <ThemeSwitcher {...args} />\r\n)',
            },
          },
          Dark.parameters,
        ))
      var __namedExportsOrder = ['Light', 'Dark']
    },
    './src/app/providers/ThemeProvider/index.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        Q2: () => Theme,
        Fg: () => useTheme,
      })
      __webpack_require__(
        './node_modules/core-js/modules/es.array.is-array.js',
      ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
      var react = __webpack_require__('./node_modules/react/index.js'),
        Theme = (function (Theme) {
          return (Theme.LIGHT = 'light'), (Theme.DARK = 'dark'), Theme
        })({}),
        ThemeContext = (0, react.createContext)({}),
        LOCAL_STORAGE_THEME_KEY = 'theme',
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return
                  _n = !1
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var defaultTheme =
          localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT,
        ThemeProvider = function ThemeProvider(_ref) {
          var children = _ref.children,
            _useState2 = _slicedToArray((0, react.useState)(defaultTheme), 2),
            theme = _useState2[0],
            setTheme = _useState2[1],
            defaultProps = (0, react.useMemo)(
              function () {
                return { theme, setTheme }
              },
              [theme],
            )
          return (0, jsx_runtime.jsx)(ThemeContext.Provider, {
            value: defaultProps,
            children,
          })
        }
      ThemeProvider.displayName = 'ThemeProvider'
      try {
        ;(ThemeProvider.displayName = 'ThemeProvider'),
          (ThemeProvider.__docgenInfo = {
            description: '',
            displayName: 'ThemeProvider',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider'
            ] = {
              docgenInfo: ThemeProvider.__docgenInfo,
              name: 'ThemeProvider',
              path: 'src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      function useTheme() {
        var _useContext = (0, react.useContext)(ThemeContext),
          setTheme = _useContext.setTheme,
          theme = _useContext.theme
        return {
          toggleTheme: function toggleTheme() {
            var newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme),
              setTheme(newTheme)
          },
          theme,
        }
      }
    },
    './src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { F: () => ThemeDecorator })
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        ThemeDecorator = function ThemeDecorator(theme) {
          return function (StoryComponent) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              'div',
              {
                className: 'app ' + theme,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  StoryComponent,
                  {},
                ),
              },
            )
          }
        }
      try {
        ;(ThemeDecorator.displayName = 'ThemeDecorator'),
          (ThemeDecorator.__docgenInfo = {
            description: '',
            displayName: 'ThemeDecorator',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator'
            ] = {
              docgenInfo: ThemeDecorator.__docgenInfo,
              name: 'ThemeDecorator',
              path: 'src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/shared/lib/classNames/classNames.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { A: () => classNames })
      __webpack_require__('./node_modules/core-js/modules/es.array.join.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.concat.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.entries.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.is-array.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        )
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator']
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return
                  _n = !1
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                ;(_d = !0), (_e = err)
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter)
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var classNames = function classNames(cls) {
        var mods =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return [cls]
          .concat(
            _toConsumableArray(
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : []
              ).filter(Boolean),
            ),
            _toConsumableArray(
              Object.entries(mods)
                .filter(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    value = (_ref2[0], _ref2[1])
                  return Boolean(value)
                })
                .map(function (_ref3) {
                  return _slicedToArray(_ref3, 1)[0]
                }),
            ),
          )
          .join(' ')
      }
    },
    './src/shared/ui/AppLink/AppLink.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        F: () => AppLink,
        u: () => AppLinkTheme,
      })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        )
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        AppLink_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(AppLink_module.Z, options)
      const AppLink_AppLink_module =
        AppLink_module.Z && AppLink_module.Z.locals
          ? AppLink_module.Z.locals
          : void 0
      var dist = __webpack_require__(
          './node_modules/react-router-dom/dist/index.js',
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['to', 'className', 'children', 'theme']
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var AppLinkTheme = (function (AppLinkTheme) {
          return (
            (AppLinkTheme.PRIMARY = 'primary'),
            (AppLinkTheme.SECONDARY = 'secondary'),
            AppLinkTheme
          )
        })({}),
        AppLink = function AppLink(props) {
          var to = props.to,
            className = props.className,
            children = props.children,
            _props$theme = props.theme,
            theme =
              void 0 === _props$theme ? AppLinkTheme.PRIMARY : _props$theme,
            otherProps = _objectWithoutProperties(props, _excluded)
          return (0, jsx_runtime.jsx)(
            dist.rU,
            Object.assign(
              {
                to,
                className: (0, classNames.A)(
                  AppLink_AppLink_module.AppLink,
                  {},
                  [className, AppLink_AppLink_module[theme]],
                ),
              },
              otherProps,
              { children },
            ),
          )
        }
      AppLink.displayName = 'AppLink'
      try {
        ;(AppLink.displayName = 'AppLink'),
          (AppLink.__docgenInfo = {
            description: '',
            displayName: 'AppLink',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/shared/ui/AppLink/AppLink.tsx#AppLink'
            ] = {
              docgenInfo: AppLink.__docgenInfo,
              name: 'AppLink',
              path: 'src/shared/ui/AppLink/AppLink.tsx#AppLink',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/shared/ui/Button/Button.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, {
        z: () => Button,
        U: () => ButtonTheme,
      })
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js',
        )
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Button_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(Button_module.Z, options)
      const Button_Button_module =
        Button_module.Z && Button_module.Z.locals
          ? Button_module.Z.locals
          : void 0
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        _excluded = ['className', 'children', 'theme']
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var ButtonTheme = (function (ButtonTheme) {
          return (
            (ButtonTheme.CLEAR = 'clear'),
            (ButtonTheme.OUTLINE = 'outline'),
            ButtonTheme
          )
        })({}),
        Button = function Button(props) {
          var className = props.className,
            children = props.children,
            theme = props.theme,
            otherProps = _objectWithoutProperties(props, _excluded)
          return (0, jsx_runtime.jsx)(
            'button',
            Object.assign(
              {
                className: (0, classNames.A)(Button_Button_module.Button, {}, [
                  className,
                  Button_Button_module[theme],
                ]),
              },
              otherProps,
              { children },
            ),
          )
        }
      Button.displayName = 'Button'
      try {
        ;(Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"clear"' }, { value: '"outline"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/shared/ui/Button/Button.tsx#Button'] =
              {
                docgenInfo: Button.__docgenInfo,
                name: 'Button',
                path: 'src/shared/ui/Button/Button.tsx#Button',
              })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/shared/ui/Loader/Loader.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { a: () => Loader })
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Loader_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(Loader_module.Z, options)
      const Loader_Loader_module =
        Loader_module.Z && Loader_module.Z.locals
          ? Loader_module.Z.locals
          : void 0
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        Loader = function Loader(_ref) {
          var className = _ref.className
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, classNames.A)(
              Loader_Loader_module.lds_ellipsis,
              {},
              [className],
            ),
            children: [
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
              (0, jsx_runtime.jsx)('div', {}),
            ],
          })
        }
      Loader.displayName = 'Loader'
      try {
        ;(Loader.displayName = 'Loader'),
          (Loader.__docgenInfo = {
            description: '',
            displayName: 'Loader',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/shared/ui/Loader/Loader.tsx#Loader'] =
              {
                docgenInfo: Loader.__docgenInfo,
                name: 'Loader',
                path: 'src/shared/ui/Loader/Loader.tsx#Loader',
              })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/widgets/LangSwitcher/ui/LangSwitcher.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { k: () => LangSwitcher })
      __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.async-iterator.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.math.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.json.to-string-tag.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.create.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-prototype-of.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.set-prototype-of.js',
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.reverse.js',
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js')
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        LangSwitcher_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/ui/LangSwitcher.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(LangSwitcher_module.Z, options)
      const ui_LangSwitcher_module =
        LangSwitcher_module.Z && LangSwitcher_module.Z.locals
          ? LangSwitcher_module.Z.locals
          : void 0
      var useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        ),
        Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports
        }
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value
            },
          $Symbol = 'function' == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || '@@iterator',
          asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
          toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          )
        }
        try {
          define({}, '')
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value)
          }
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || [])
          return (
            defineProperty(generator, '_invoke', {
              value: makeInvokeMethod(innerFn, self, context),
            }),
            generator
          )
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) }
          } catch (err) {
            return { type: 'throw', arg: err }
          }
        }
        exports.wrap = wrap
        var ContinueSentinel = {}
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {}
        define(IteratorPrototype, iteratorSymbol, function () {
          return this
        })
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])))
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype)
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype))
        function defineIteratorMethods(prototype) {
          ;['next', 'throw', 'return'].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg)
            })
          })
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg)
            if ('throw' !== record.type) {
              var result = record.arg,
                value = result.value
              return value &&
                'object' == typeof value &&
                hasOwn.call(value, '__await')
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke('next', value, resolve, reject)
                    },
                    function (err) {
                      invoke('throw', err, resolve, reject)
                    },
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      ;(result.value = unwrapped), resolve(result)
                    },
                    function (error) {
                      return invoke('throw', error, resolve, reject)
                    },
                  )
            }
            reject(record.arg)
          }
          var previousPromise
          defineProperty(this, '_invoke', {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject)
                })
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(
                    callInvokeWithMethodAndArg,
                    callInvokeWithMethodAndArg,
                  )
                : callInvokeWithMethodAndArg())
            },
          })
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = 'suspendedStart'
          return function (method, arg) {
            if ('executing' === state)
              throw new Error('Generator is already running')
            if ('completed' === state) {
              if ('throw' === method) throw arg
              return { value: void 0, done: !0 }
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context)
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue
                  return delegateResult
                }
              }
              if ('next' === context.method)
                context.sent = context._sent = context.arg
              else if ('throw' === context.method) {
                if ('suspendedStart' === state)
                  throw ((state = 'completed'), context.arg)
                context.dispatchException(context.arg)
              } else
                'return' === context.method &&
                  context.abrupt('return', context.arg)
              state = 'executing'
              var record = tryCatch(innerFn, self, context)
              if ('normal' === record.type) {
                if (
                  ((state = context.done ? 'completed' : 'suspendedYield'),
                  record.arg === ContinueSentinel)
                )
                  continue
                return { value: record.arg, done: context.done }
              }
              'throw' === record.type &&
                ((state = 'completed'),
                (context.method = 'throw'),
                (context.arg = record.arg))
            }
          }
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
            method = delegate.iterator[methodName]
          if (void 0 === method)
            return (
              (context.delegate = null),
              ('throw' === methodName &&
                delegate.iterator.return &&
                ((context.method = 'return'),
                (context.arg = void 0),
                maybeInvokeDelegate(delegate, context),
                'throw' === context.method)) ||
                ('return' !== methodName &&
                  ((context.method = 'throw'),
                  (context.arg = new TypeError(
                    "The iterator does not provide a '" +
                      methodName +
                      "' method",
                  )))),
              ContinueSentinel
            )
          var record = tryCatch(method, delegate.iterator, context.arg)
          if ('throw' === record.type)
            return (
              (context.method = 'throw'),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            )
          var info = record.arg
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                'return' !== context.method &&
                  ((context.method = 'next'), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = 'throw'),
              (context.arg = new TypeError('iterator result is not an object')),
              (context.delegate = null),
              ContinueSentinel)
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] }
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs &&
              ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry)
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {}
          ;(record.type = 'normal'),
            delete record.arg,
            (entry.completion = record)
        }
        function Context(tryLocsList) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0)
        }
        function values(iterable) {
          if (iterable || '' === iterable) {
            var iteratorMethod = iterable[iteratorSymbol]
            if (iteratorMethod) return iteratorMethod.call(iterable)
            if ('function' == typeof iterable.next) return iterable
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next
                  return (next.value = void 0), (next.done = !0), next
                }
              return (next.next = next)
            }
          }
          throw new TypeError(typeof iterable + ' is not iterable')
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, 'constructor', {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          defineProperty(GeneratorFunctionPrototype, 'constructor', {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            'GeneratorFunction',
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = 'function' == typeof genFun && genFun.constructor
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                'GeneratorFunction' === (ctor.displayName || ctor.name))
            )
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
              (genFun.prototype = Object.create(Gp)),
              genFun
            )
          }),
          (exports.awrap = function (arg) {
            return { __await: arg }
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl,
          ) {
            void 0 === PromiseImpl && (PromiseImpl = Promise)
            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl,
            )
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next()
                })
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, 'Generator'),
          define(Gp, iteratorSymbol, function () {
            return this
          }),
          define(Gp, 'toString', function () {
            return '[object Generator]'
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = []
            for (var key in object) keys.push(key)
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop()
                  if (key in object)
                    return (next.value = key), (next.done = !1), next
                }
                return (next.done = !0), next
              }
            )
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  't' === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = void 0)
            },
            stop: function stop() {
              this.done = !0
              var rootRecord = this.tryEntries[0].completion
              if ('throw' === rootRecord.type) throw rootRecord.arg
              return this.rval
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception
              var context = this
              function handle(loc, caught) {
                return (
                  (record.type = 'throw'),
                  (record.arg = exception),
                  (context.next = loc),
                  caught && ((context.method = 'next'), (context.arg = void 0)),
                  !!caught
                )
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion
                if ('root' === entry.tryLoc) return handle('end')
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, 'catchLoc'),
                    hasFinally = hasOwn.call(entry, 'finallyLoc')
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0)
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc)
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc)
                      return handle(entry.catchLoc, !0)
                  } else {
                    if (!hasFinally)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < entry.finallyLoc)
                      return handle(entry.finallyLoc)
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, 'finallyLoc') &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry
                  break
                }
              }
              finallyEntry &&
                ('break' === type || 'continue' === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null)
              var record = finallyEntry ? finallyEntry.completion : {}
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = 'next'),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              )
            },
            complete: function complete(record, afterLoc) {
              if ('throw' === record.type) throw record.arg
              return (
                'break' === record.type || 'continue' === record.type
                  ? (this.next = record.arg)
                  : 'return' === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === record.type &&
                    afterLoc &&
                    (this.next = afterLoc),
                ContinueSentinel
              )
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  )
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i]
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion
                  if ('throw' === record.type) {
                    var thrown = record.arg
                    resetTryEntry(entry)
                  }
                  return thrown
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function delegateYield(
              iterable,
              resultName,
              nextLoc,
            ) {
              return (
                (this.delegate = {
                  iterator: values(iterable),
                  resultName,
                  nextLoc,
                }),
                'next' === this.method && (this.arg = void 0),
                ContinueSentinel
              )
            },
          }),
          exports
        )
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value
        } catch (error) {
          return void reject(error)
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
      }
      var LangSwitcher = function LangSwitcher(_ref) {
        var className = _ref.className,
          _useTranslation = (0, useTranslation.$)(),
          t = _useTranslation.t,
          i18n = _useTranslation.i18n,
          toggle = (function () {
            var _ref2 = (function _asyncToGenerator(fn) {
              return function () {
                var self = this,
                  args = arguments
                return new Promise(function (resolve, reject) {
                  var gen = fn.apply(self, args)
                  function _next(value) {
                    asyncGeneratorStep(
                      gen,
                      resolve,
                      reject,
                      _next,
                      _throw,
                      'next',
                      value,
                    )
                  }
                  function _throw(err) {
                    asyncGeneratorStep(
                      gen,
                      resolve,
                      reject,
                      _next,
                      _throw,
                      'throw',
                      err,
                    )
                  }
                  _next(void 0)
                })
              }
            })(
              _regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  for (;;)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        i18n.changeLanguage(
                          'ru' === i18n.language ? 'en' : 'ru',
                        )
                      case 1:
                      case 'end':
                        return _context.stop()
                    }
                }, _callee)
              }),
            )
            return function toggle() {
              return _ref2.apply(this, arguments)
            }
          })()
        return (0, jsx_runtime.jsx)(Button.z, {
          theme: Button.U.CLEAR,
          onClick: toggle,
          className: (0, classNames.A)(
            ui_LangSwitcher_module.LangSwitcher,
            {},
            [className],
          ),
          children: t('lang'),
        })
      }
      LangSwitcher.displayName = 'LangSwitcher'
      try {
        ;(LangSwitcher.displayName = 'LangSwitcher'),
          (LangSwitcher.__docgenInfo = {
            description: '',
            displayName: 'LangSwitcher',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/LangSwitcher/ui/LangSwitcher.tsx#LangSwitcher'
            ] = {
              docgenInfo: LangSwitcher.__docgenInfo,
              name: 'LangSwitcher',
              path: 'src/widgets/LangSwitcher/ui/LangSwitcher.tsx#LangSwitcher',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/widgets/PageError/ui/PageError.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { S: () => PageError })
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        PageError_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(PageError_module.Z, options)
      const ui_PageError_module =
        PageError_module.Z && PageError_module.Z.locals
          ? PageError_module.Z.locals
          : void 0
      var useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js',
        ),
        Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        PageError = function PageError(_ref) {
          var className = _ref.className,
            t = (0, useTranslation.$)().t
          return (0, jsx_runtime.jsxs)('div', {
            className: (0, classNames.A)(ui_PageError_module.PageError, {}, [
              className,
            ]),
            children: [
              (0, jsx_runtime.jsx)('p', { children: t('react_error') }),
              (0, jsx_runtime.jsx)(Button.z, {
                onClick: function reloadPage() {
                  location.reload()
                },
                children: t('reload_page'),
              }),
            ],
          })
        }
      PageError.displayName = 'PageError'
      try {
        ;(PageError.displayName = 'PageError'),
          (PageError.__docgenInfo = {
            description: '',
            displayName: 'PageError',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/PageError/ui/PageError.tsx#PageError'
            ] = {
              docgenInfo: PageError.__docgenInfo,
              name: 'PageError',
              path: 'src/widgets/PageError/ui/PageError.tsx#PageError',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.d(__webpack_exports__, { O: () => ThemeSwitcher })
      var classNames = __webpack_require__(
          './src/shared/lib/classNames/classNames.ts',
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        ThemeSwitcher_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(ThemeSwitcher_module.Z, options)
      const ui_ThemeSwitcher_module =
        ThemeSwitcher_module.Z && ThemeSwitcher_module.Z.locals
          ? ThemeSwitcher_module.Z.locals
          : void 0
      var _path,
        _path2,
        _path3,
        ThemeProvider = __webpack_require__(
          './src/app/providers/ThemeProvider/index.ts',
        ),
        react = __webpack_require__('./node_modules/react/index.js')
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key])
                }
                return target
              }),
          _extends.apply(this, arguments)
        )
      }
      const theme_light = function SvgThemeLight(props) {
        return react.createElement(
          'svg',
          _extends(
            {
              width: 40,
              height: 41,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            props,
          ),
          _path ||
            (_path = react.createElement('path', {
              d: 'M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z',
              fill: '#FFC700',
            })),
          _path2 ||
            (_path2 = react.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'm18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z',
              fill: '#FFC700',
            })),
          _path3 ||
            (_path3 = react.createElement('path', {
              d: 'M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z',
              fill: '#FFC700',
            })),
        )
      }
      var theme_dark_path, theme_dark_path2
      function theme_dark_extends() {
        return (
          (theme_dark_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i]
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key])
                }
                return target
              }),
          theme_dark_extends.apply(this, arguments)
        )
      }
      const theme_dark = function SvgThemeDark(props) {
        return react.createElement(
          'svg',
          theme_dark_extends(
            {
              width: 40,
              height: 41,
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            props,
          ),
          theme_dark_path ||
            (theme_dark_path = react.createElement('path', {
              d: 'M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z',
              fill: '#0115C6',
            })),
          theme_dark_path2 ||
            (theme_dark_path2 = react.createElement('path', {
              d: 'm14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z',
              fill: '#0115C6',
            })),
        )
      }
      var Button = __webpack_require__('./src/shared/ui/Button/Button.tsx'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js',
        ),
        ThemeSwitcher = function ThemeSwitcher(_ref) {
          var className = _ref.className,
            _useTheme = (0, ThemeProvider.Fg)(),
            theme = _useTheme.theme,
            toggleTheme = _useTheme.toggleTheme
          return (0, jsx_runtime.jsx)(Button.z, {
            theme: Button.U.CLEAR,
            onClick: toggleTheme,
            className: (0, classNames.A)(
              ui_ThemeSwitcher_module.ThemeSwitcher,
              {},
              [className],
            ),
            children:
              theme === ThemeProvider.Q2.DARK
                ? (0, jsx_runtime.jsx)(theme_dark, {})
                : (0, jsx_runtime.jsx)(theme_light, {}),
          })
        }
      ThemeSwitcher.displayName = 'ThemeSwitcher'
      try {
        ;(ThemeSwitcher.displayName = 'ThemeSwitcher'),
          (ThemeSwitcher.__docgenInfo = {
            description: '',
            displayName: 'ThemeSwitcher',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher'
            ] = {
              docgenInfo: ThemeSwitcher.__docgenInfo,
              name: 'ThemeSwitcher',
              path: 'src/widgets/ThemeSwitcher/ui/ThemeSwitcher.tsx#ThemeSwitcher',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './storybook-init-framework-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js',
      )
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '*{padding:0;margin:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: Consolas, "Times New Roman", Serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px}.app.dark{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #049604;--secondory-color: #04ff04;--inverted-primary-color: #0232c2;--inverted-secondory-color: #0452ff}:root{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondory-color: #0452ff;--inverted-primary-color: #049604;--inverted-secondory-color: #04ff04}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/app/styles/reset.scss',
              'webpack://./src/app/styles/variables/global.scss',
              'webpack://./src/app/styles/themes/dark.scss',
              'webpack://./src/app/styles/themes/normal.scss',
              'webpack://./src/app/styles/index.scss',
            ],
            names: [],
            mappings:
              'AAAA,EACE,SAAA,CACA,QAAA,CACA,qBAAA,CAGF,6BAIE,QAAA,CACA,YAAA,CCXF,MACE,sDAAA,CAEA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAEA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAIA,qBAAA,CAEA,sBAAA,CACA,+BAAA,CChBF,UACE,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CAEA,iCAAA,CACA,mCAAA,CCPF,MACE,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CAEA,iCAAA,CACA,mCAAA,CCFF,KACE,kBAAA,CAEA,0BAAA,CACA,0BAAA,CAEA,gBAAA,CAGF,cACE,YAAA,CAEF,cACE,WAAA,CACA,YAAA',
            sourcesContent: [
              '* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n}\r\n',
              ":root {\r\n  --font-family-main: Consolas, 'Times New Roman', Serif;\r\n\r\n  --font-size-m: 16px;\r\n  --font-line-m: 24px;\r\n  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n\r\n  --font-size-l: 24px;\r\n  --font-line-l: 32px;\r\n  --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n\r\n  //Sizes\r\n\r\n  --navbar-height: 50px;\r\n\r\n  --sidebar-width: 300px;\r\n  --sidebar-width-collapsed: 80px;\r\n}\r\n",
              '.app.dark {\r\n  --bg-color: #090949;\r\n  --inverted-bg-color: #e8e8ea;\r\n  --primary-color: #049604;\r\n  --secondory-color: #04ff04;\r\n\r\n  --inverted-primary-color: #0232c2;\r\n  --inverted-secondory-color: #0452ff;\r\n}\r\n',
              ':root {\r\n  --bg-color: #e8e8ea;\r\n  --inverted-bg-color: #090949;\r\n  --primary-color: #0232c2;\r\n  --secondory-color: #0452ff;\r\n\r\n  --inverted-primary-color: #049604;\r\n  --inverted-secondory-color: #04ff04;\r\n}\r\n',
              "@import 'reset';\r\n@import 'variables/global';\r\n@import 'themes/dark';\r\n@import 'themes/normal';\r\n\r\n.app {\r\n  font: var(--font-m);\r\n\r\n  background: var(--bg-color);\r\n  color: var(--primary-color);\r\n\r\n  min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n  display: flex;\r\n}\r\n.page-wrapper {\r\n  flex-grow: 1;\r\n  padding: 20px;\r\n}\r\n",
            ],
            sourceRoot: '',
          },
        ])
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/NotFoundPage/ui/NotFoundPage.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9{display:flex;justify-content:center;align-items:center;height:100%;font:var(--font-l)}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/pages/NotFoundPage/ui/NotFoundPage.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,oEACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,kBAAA',
            sourcesContent: [
              '.NotFoundPage {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  font: var(--font-l);\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            NotFoundPage:
              'src-pages-NotFoundPage-ui-NotFoundPage-module__NotFoundPage--s3qI9',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/AppLink/AppLink.module.scss'],
            names: [],
            mappings: 'AAAA,sDACE,0BAAA,CAGF,sDACE,0BAAA,CAGF,wDACE,mCAAA',
            sourcesContent: [
              '.AppLink {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n  color: var(--inverted-primary-color);\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            AppLink: 'src-shared-ui-AppLink-AppLink-module__AppLink--mVYHW',
            primary: 'src-shared-ui-AppLink-AppLink-module__primary--lPwbq',
            secondary: 'src-shared-ui-AppLink-AppLink-module__secondary--E8eho',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{padding:0;border:none;background:none;outline:none}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/Button/Button.module.scss'],
            names: [],
            mappings:
              'AAAA,mDACE,cAAA,CACA,0BAAA,CAGF,kDACE,SAAA,CACA,WAAA,CACA,eAAA,CACA,YAAA,CAGF,oDACE,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA',
            sourcesContent: [
              '.Button {\r\n  cursor: pointer;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.clear {\r\n  padding: 0;\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n}\r\n\r\n.outline {\r\n  padding: 10px 15px;\r\n  border: 1px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n  background: none;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Button: 'src-shared-ui-Button-Button-module__Button--a4nOa',
            clear: 'src-shared-ui-Button-Button-module__clear--FAEtI',
            outline: 'src-shared-ui-Button-Button-module__outline--pxBl_',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8{display:inline-block;position:relative;width:80px;height:80px}.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8 div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:var(--inverted-bg-color);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8 div:nth-child(1){left:8px;animation:src-shared-ui-Loader-Loader-module__lds_ellipsis1--B7DV7 .6s infinite}.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8 div:nth-child(2){left:8px;animation:src-shared-ui-Loader-Loader-module__lds_ellipsis2--UeFrp .6s infinite}.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8 div:nth-child(3){left:32px;animation:src-shared-ui-Loader-Loader-module__lds_ellipsis2--UeFrp .6s infinite}.src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8 div:nth-child(4){left:56px;animation:src-shared-ui-Loader-Loader-module__lds_ellipsis3--fiiEX .6s infinite}@keyframes src-shared-ui-Loader-Loader-module__lds_ellipsis1--B7DV7{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes src-shared-ui-Loader-Loader-module__lds_ellipsis3--fiiEX{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes src-shared-ui-Loader-Loader-module__lds_ellipsis2--UeFrp{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/shared/ui/Loader/Loader.module.scss'],
            names: [],
            mappings:
              'AAAA,yDACE,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAEF,6DACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,mCAAA,CACA,kDAAA,CAGF,0EACE,QAAA,CACA,+EAAA,CAGF,0EACE,QAAA,CACA,+EAAA,CAGF,0EACE,SAAA,CACA,+EAAA,CAGF,0EACE,SAAA,CACA,+EAAA,CAGF,oEACE,GACE,kBAAA,CAEF,KACE,kBAAA,CAAA,CAIJ,oEACE,GACE,kBAAA,CAEF,KACE,kBAAA,CAAA,CAIJ,oEACE,GACE,yBAAA,CAEF,KACE,4BAAA,CAAA',
            sourcesContent: [
              '.lds_ellipsis {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds_ellipsis div {\r\n  position: absolute;\r\n  top: 33px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: var(--inverted-bg-color);\r\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n\r\n.lds_ellipsis div:nth-child(1) {\r\n  left: 8px;\r\n  animation: lds_ellipsis1 0.6s infinite;\r\n}\r\n\r\n.lds_ellipsis div:nth-child(2) {\r\n  left: 8px;\r\n  animation: lds_ellipsis2 0.6s infinite;\r\n}\r\n\r\n.lds_ellipsis div:nth-child(3) {\r\n  left: 32px;\r\n  animation: lds_ellipsis2 0.6s infinite;\r\n}\r\n\r\n.lds_ellipsis div:nth-child(4) {\r\n  left: 56px;\r\n  animation: lds_ellipsis3 0.6s infinite;\r\n}\r\n\r\n@keyframes lds_ellipsis1 {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes lds_ellipsis3 {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n  }\r\n}\r\n\r\n@keyframes lds_ellipsis2 {\r\n  0% {\r\n    transform: translate(0, 0);\r\n  }\r\n  100% {\r\n    transform: translate(24px, 0);\r\n  }\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            lds_ellipsis:
              'src-shared-ui-Loader-Loader-module__lds_ellipsis--cdaF8',
            lds_ellipsis1:
              'src-shared-ui-Loader-Loader-module__lds_ellipsis1--B7DV7',
            lds_ellipsis2:
              'src-shared-ui-Loader-Loader-module__lds_ellipsis2--UeFrp',
            lds_ellipsis3:
              'src-shared-ui-Loader-Loader-module__lds_ellipsis3--fiiEX',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/LangSwitcher/ui/LangSwitcher.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '',
          '',
          { version: 3, sources: [], names: [], mappings: '', sourceRoot: '' },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {})
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Navbar/ui/Navbar.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK{width:100%;height:var(--navbar-height);background:var(--inverted-bg-color);display:flex;align-items:center;padding:20px}.src-widgets-Navbar-ui-Navbar-module__links--_tl_p{margin-left:auto}.src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP{padding-right:15px}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/widgets/Navbar/ui/Navbar.module.scss'],
            names: [],
            mappings:
              'AAAA,oDACE,UAAA,CACA,2BAAA,CACA,mCAAA,CACA,YAAA,CACA,kBAAA,CACA,YAAA,CAGF,mDACE,gBAAA,CAGF,sDACE,kBAAA',
            sourcesContent: [
              '.Navbar {\r\n  width: 100%;\r\n  height: var(--navbar-height);\r\n  background: var(--inverted-bg-color);\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n}\r\n\r\n.links {\r\n  margin-left: auto;\r\n}\r\n\r\n.mainLink {\r\n  padding-right: 15px;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Navbar: 'src-widgets-Navbar-ui-Navbar-module__Navbar--YC5yK',
            links: 'src-widgets-Navbar-ui-Navbar-module__links--_tl_p',
            mainLink: 'src-widgets-Navbar-ui-Navbar-module__mainLink--ZMsbP',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-widgets-PageError-ui-PageError-module__PageError--HSFBb{width:100%;height:100vh;display:flex;align-items:center;justify-content:center}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/widgets/PageError/ui/PageError.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,6DACE,UAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA',
            sourcesContent: [
              '.PageError {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            PageError:
              'src-widgets-PageError-ui-PageError-module__PageError--HSFBb',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageLoader/ui/PageLoader.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-widgets-PageLoader-ui-PageLoader-module__PageLoader--E86UV{min-height:calc(100vh - var(--navbar-height));display:flex;justify-content:center;align-items:center;flex-grow:1}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/widgets/PageLoader/ui/PageLoader.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,gEACE,6CAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA',
            sourcesContent: [
              '.PageLoader {\r\n  min-height: calc(100vh - var(--navbar-height));\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            PageLoader:
              'src-widgets-PageLoader-ui-PageLoader-module__PageLoader--E86UV',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background:var(--inverted-bg-color);position:relative;transition:width .3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{position:absolute;bottom:20px;display:flex;justify-content:center;width:100%}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:20px}',
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss',
            ],
            names: [],
            mappings:
              'AAAA,+DACE,yCAAA,CACA,0BAAA,CACA,mCAAA,CACA,iBAAA,CACA,oBAAA,CAGF,iEACE,oCAAA,CAGF,iEACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,UAAA,CAGF,4DACE,gBAAA',
            sourcesContent: [
              '.Sidebar {\r\n  height: calc(100vh - var(--navbar-height));\r\n  width: var(--sidebar-width);\r\n  background: var(--inverted-bg-color);\r\n  position: relative;\r\n  transition: width 0.3s;\r\n}\r\n\r\n.collapsed {\r\n  width: var(--sidebar-width-collapsed);\r\n}\r\n\r\n.switchers {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.lang {\r\n  margin-left: 20px;\r\n}\r\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            Sidebar:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU',
            collapsed:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC',
            switchers:
              'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw',
            lang: 'src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[11].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '',
          '',
          { version: 3, sources: [], names: [], mappings: '', sourceRoot: '' },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {})
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './pages/AboutPage/ui/AboutPage.stories.tsx':
            './src/pages/AboutPage/ui/AboutPage.stories.tsx',
          './pages/MainPage/ui/MainPage.stories.tsx':
            './src/pages/MainPage/ui/MainPage.stories.tsx',
          './pages/NotFoundPage/ui/NotFoundPage.stories.tsx':
            './src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx',
          './shared/ui/AppLink/AppLink.stories.tsx':
            './src/shared/ui/AppLink/AppLink.stories.tsx',
          './shared/ui/Button/Button.stories.tsx':
            './src/shared/ui/Button/Button.stories.tsx',
          './shared/ui/Loader/Loader.stories.tsx':
            './src/shared/ui/Loader/Loader.stories.tsx',
          './widgets/LangSwitcher/ui/LangSwitcher.stories.tsx':
            './src/widgets/LangSwitcher/ui/LangSwitcher.stories.tsx',
          './widgets/Navbar/ui/Navbar.stories.tsx':
            './src/widgets/Navbar/ui/Navbar.stories.tsx',
          './widgets/PageError/ui/PageError.stories.tsx':
            './src/widgets/PageError/ui/PageError.stories.tsx',
          './widgets/PageLoader/ui/PageLoader.stories.tsx':
            './src/widgets/PageLoader/ui/PageLoader.stories.tsx',
          './widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx':
            './src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx',
          './widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx':
            './src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx',
        }
        function webpackContext(req) {
          var id = webpackContextResolve(req)
          return __webpack_require__(id)
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'")
            throw ((e.code = 'MODULE_NOT_FOUND'), e)
          }
          return map[req]
        }
        ;(webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map)
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
      },
    '?4f7e': () => {},
    './generated-stories-entry.cjs': (
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) => {
      'use strict'
      ;(module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js',
        ).configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$',
            ),
          ],
          module,
          !1,
        )
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId))
    __webpack_require__.O(
      0,
      [518],
      () => (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js',
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__(
          './config/storybook/preview.js-generated-config-entry.js',
        ),
        __webpack_exec__('./generated-stories-entry.cjs')
      ),
    )
    __webpack_require__.O()
  },
])
