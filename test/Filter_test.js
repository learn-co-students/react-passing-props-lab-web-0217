import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

const Noop = () => (<p>Noop</p>);
import Filter from '../components/Filter';

const filters = [ 'filter1', 'filter2', 'filter3' ];

describe('<Filter />', () => {
  let spy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = !Filter.prototype ?
      shallow(<Noop />) : shallow(<Filter filters={filters} handleChange={spy}/>);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should have a defaultProp "filters"', () => {
    expect(Filter.defaultProps).toExist('defaultProps is not defined.');
    expect(Filter.defaultProps).toIncludeKey('filters');
  });

  it('should have a defaultProp "handleChange"', () => {
    expect(Filter.defaultProps).toExist('defaultProps is not defined.');
    expect(Filter.defaultProps).toIncludeKey('handleChange');
  });

  it('should call "handleChange" callback when there is a change', () => {
    wrapper.find('select').simulate('change');
    expect(spy.calledOnce).toBeTruthy();
  });

  it('should render a select element with a default option "all"', () => {
    expect(wrapper.find('select').childAt(0).prop('value')).toBe('all');
  });

  ///////There are only three filters///////
  it('should render all the provided "filters"', () => {
    const options = wrapper.find('option');
    expect(options.length).toBe(3, 'Did not render all the filters.');
  });

});
