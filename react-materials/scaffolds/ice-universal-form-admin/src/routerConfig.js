// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import NotFound from './pages/NotFound';
import SingleColumnForm from './pages/SingleColumnForm';
import TwoColumnForm from './pages/TwoColumnForm';
import ThreeColumnForm from './pages/ThreeColumnForm';
import FourColumnForm from './pages/FourColumnForm';
import FormGroup from './pages/FormGroup';
import StepForm from './pages/StepForm';
import FormGroupToolbar from './pages/FormGroupToolbar';
import Survey from './pages/Survey';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: SingleColumnForm,
  },
  {
    path: '/two-column-form',
    layout: BasicLayout,
    component: TwoColumnForm,
  },
  {
    path: '/three-column-form',
    layout: BasicLayout,
    component: ThreeColumnForm,
  },
  {
    path: '/four-column-form',
    layout: BasicLayout,
    component: FourColumnForm,
  },
  {
    path: '/form-group',
    layout: BasicLayout,
    component: FormGroup,
  },
  {
    path: '/step-form',
    layout: BasicLayout,
    component: StepForm,
  },
  {
    path: '/form-group-toolbar',
    layout: BasicLayout,
    component: FormGroupToolbar,
  },
  {
    path: '/survey',
    layout: BasicLayout,
    component: Survey,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
