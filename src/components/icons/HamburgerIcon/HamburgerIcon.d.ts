import DefaultMobile from './HamburgerIcon.mobile';
import * as mobile from './HamburgerIcon.mobile';
// import DefaultWeb from './AddTerm.web';
// import * as web from './AddTerm.web';

declare var _test: typeof mobile;
// declare var _test: typeof web;

declare var _testDefault: typeof DefaultMobile;
// declare var _testDefault: typeof DefaultWeb;

export * from './HamburgerIcon.mobile';
export default DefaultMobile;