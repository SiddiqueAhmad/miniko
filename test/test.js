const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1066,
            height: 701
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('https://nucleus.bazaar.technology/ghalib-module/newbuilder');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "form > div:nth-of-type(2) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/form > div:nth-of-type(2) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "form > div:nth-of-type(2) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/form > div:nth-of-type(2) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 15.3671875,
            y: 12.9140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/GMV Booked'
            ],
            [
                '#autocomplete-component-option-0'
            ],
            [
                'xpath///*[@id="autocomplete-component-option-0"]'
            ],
            [
                'pierce/#autocomplete-component-option-0'
            ],
            [
                'text/GMV Booked'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/GMV Booked'
            ],
            [
                '#autocomplete-component-option-0'
            ],
            [
                'xpath///*[@id="autocomplete-component-option-0"]'
            ],
            [
                'pierce/#autocomplete-component-option-0'
            ],
            [
                'text/GMV Booked'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 225.5,
            y: 28,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 13.3671875,
            y: 14.9140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/order_date'
            ],
            [
                '#mui-2-option-0'
            ],
            [
                'xpath///*[@id="mui-2-option-0"]'
            ],
            [
                'pierce/#mui-2-option-0'
            ],
            [
                'text/order_date'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/order_date'
            ],
            [
                '#mui-2-option-0'
            ],
            [
                'xpath///*[@id="mui-2-option-0"]'
            ],
            [
                'pierce/#mui-2-option-0'
            ],
            [
                'text/order_date'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 236.5,
            y: 26.3984375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 7.3671875,
            y: 13.9140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/store_id'
            ],
            [
                '#mui-4-option-2'
            ],
            [
                'xpath///*[@id="mui-4-option-2"]'
            ],
            [
                'pierce/#mui-4-option-2'
            ],
            [
                'text/store_id'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/store_id'
            ],
            [
                '#mui-4-option-2'
            ],
            [
                'xpath///*[@id="mui-4-option-2"]'
            ],
            [
                'pierce/#mui-4-option-2'
            ],
            [
                'text/store_id'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 214.5,
            y: -0.6015625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 13.3671875,
            y: 13.9140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/order_warehouse'
            ],
            [
                '#mui-6-option-1'
            ],
            [
                'xpath///*[@id="mui-6-option-1"]'
            ],
            [
                'pierce/#mui-6-option-1'
            ],
            [
                'text/order_warehouse'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/order_warehouse'
            ],
            [
                '#mui-6-option-1'
            ],
            [
                'xpath///*[@id="mui-6-option-1"]'
            ],
            [
                'pierce/#mui-6-option-1'
            ],
            [
                'text/order_warehouse'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 257.5,
            y: 26.3984375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div:nth-of-type(3) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 19.3671875,
            y: 19.9140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/city'
            ],
            [
                '#mui-8-option-5'
            ],
            [
                'xpath///*[@id="mui-8-option-5"]'
            ],
            [
                'pierce/#mui-8-option-5'
            ],
            [
                'text/city'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/city'
            ],
            [
                '#mui-8-option-5'
            ],
            [
                'xpath///*[@id="mui-8-option-5"]'
            ],
            [
                'pierce/#mui-8-option-5'
            ],
            [
                'text/city'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 254.5,
            y: 7.3984375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Add Filter'
            ],
            [
                'div:nth-of-type(4) button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/form/div[4]/div/div[2]/div/div/button'
            ],
            [
                'pierce/div:nth-of-type(4) button'
            ],
            [
                'text/Add Filter'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Add Filter'
            ],
            [
                'div:nth-of-type(4) button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/form/div[4]/div/div[2]/div/div/button'
            ],
            [
                'pierce/div:nth-of-type(4) button'
            ],
            [
                'text/Add Filter'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 86.203125,
            y: 12.1640625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                "div.filter-body > div > div > div:nth-of-type(1) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div.filter-body > div > div > div:nth-of-type(1) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                "div.filter-body > div > div > div:nth-of-type(1) [data-testid='ArrowDropDownIcon']"
            ],
            [
                'xpath///*[@data-testid="ArrowDropDownIcon"]'
            ],
            [
                "pierce/div.filter-body > div > div > div:nth-of-type(1) [data-testid='ArrowDropDownIcon']"
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 3.203125,
            y: 21.1640625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/order_date[role="option"]'
            ],
            [
                '#autocomplete-component-option-0'
            ],
            [
                'xpath///*[@id="autocomplete-component-option-0"]'
            ],
            [
                'pierce/#autocomplete-component-option-0'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/order_date[role="option"]'
            ],
            [
                '#autocomplete-component-option-0'
            ],
            [
                'xpath///*[@id="autocomplete-component-option-0"]'
            ],
            [
                'pierce/#autocomplete-component-option-0'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 39,
            y: 19.3984375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'button.rdrDayStartOfMonth > span.rdrDayNumber'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/form/div[4]/div/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[2]/button[2]/span[2]'
            ],
            [
                'pierce/button.rdrDayStartOfMonth > span.rdrDayNumber'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'button.rdrDayStartOfMonth > span.rdrDayNumber'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/form/div[4]/div/div[2]/div/div[2]/div/div/div[2]/div/div[3]/div/div[2]/button[2]/span[2]'
            ],
            [
                'pierce/button.rdrDayStartOfMonth > span.rdrDayNumber'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 28.7890625,
            y: 1.8515625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/DOWNLOAD'
            ],
            [
                '#create-button'
            ],
            [
                'xpath///*[@id="create-button"]'
            ],
            [
                'pierce/#create-button'
            ],
            [
                'text/Download'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/DOWNLOAD'
            ],
            [
                '#create-button'
            ],
            [
                'xpath///*[@id="create-button"]'
            ],
            [
                'pierce/#create-button'
            ],
            [
                'text/Download'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 149.203125,
            y: 30.6640625,
          },
        });
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
      await element.select(value);
      await element.evaluateHandle((e) => {
        e.blur();
        e.focus();
      });
    }

    async function changeElementValue(element, value) {
      await element.focus();
      await element.evaluate((input, value) => {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
