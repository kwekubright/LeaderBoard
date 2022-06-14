/* eslint-disable no-undef */
import { renderDocument } from "../src/modules/render.mod";

beforeAll(() => {
  document.body.innerHTML = `<main></main>`;
});

describe("RenderElement", () => {
  describe('renderDocument', () => {
    test('should render the document', () => { 
      renderDocument(document);
      expect(document.body.children[0].childNodes.length).toBe(3);
      });
    });

  });