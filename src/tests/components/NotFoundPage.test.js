import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../components/NotFoundPage";

test("render not found page", () => {
  let wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot()
});
 