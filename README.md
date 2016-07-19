# dropdown.js

[![Join the chat at https://gitter.im/njbmartin/dropdown.js](https://badges.gitter.im/njbmartin/dropdown.js.svg)](https://gitter.im/njbmartin/dropdown.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The easy way to use pre-populated dropdowns in less than 3 steps!

1. Include the **JavaScript SDK** on your page once, ideally right after the opening `<body>` tag.
  
  ```html
  <script src="//dropdown.io/embed.js" async></script>
  ```
2. Add the **dropdown-io** class to an empty `select`, setting the `data-type` attribute to `countries`.

  ```html
  <select class="dropdown-io" id="country" data-type="countries"></select>
  ```
