import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import ShareTool from "./index";
import testjson from "mock_json/gifMock.json";

describe("ShareTool tests", () => {
  it("Renders the ShareTool component", () => {
    const el = shallow(<ShareTool shareUrl={testjson.embed_url} />);
    expect(el.exists()).toBe(true);
  });

  it("Renders and matches snapshot (closed state)", () => {
    const tree = shallow(<ShareTool shareUrl={testjson.embed_url} />);
    expect(tree).toMatchSnapshot();
  });

  it("Renders and matches snapshot (open state)", () => {
    global.document.queryCommandSupported = () => {
      return {
        copy: () => {
          true;
        }
      };
    };
    const tree = mount(<ShareTool shareUrl={testjson.embed_url} />);
    tree.find("button.ShareTool--open-button").simulate("click");
    expect(tree).toMatchSnapshot();
  });

  it("Copies to clipboard", () => {
    global.document.queryCommandSupported = () => {
      return {
        copy: () => {
          true;
        }
      };
    };
    global.document.execCommand = () => {
      return {
        copy: () => {
          true;
        }
      };
    };
    const tree = mount(<ShareTool shareUrl={testjson.embed_url} />);
    tree.find("button.ShareTool--open-button").simulate("click");
    tree.find("button.ShareTool--copy-button").simulate("click");
    expect(tree).toMatchSnapshot();
    expect(tree.state("copySuccess")).toEqual("Copied!");
  });

  it("Can be closed", () => {
    const tree = mount(<ShareTool shareUrl={testjson.embed_url} />);
    tree.setState({ isShowing: true });
    tree.find("div.ShareTool--modal").simulate("click");
    expect(tree).toMatchSnapshot();
    expect(tree.state("copySuccess")).toEqual("");
  });
});
