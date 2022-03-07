import {
  create,
  NH1,
  NH2,
  NP,
  NText,
  NA,
  NIcon,
  NImage,
  NAvatar,
  NButton,
  NBadge,
  NBreadcrumb,
  NBreadcrumbItem,
  NTabs,
  NTabPane,
  NList,
  NListItem,
  NDropdown,
  NMenu,
  NResult,
  NCard,
  NForm,
  NFormItemRow,
  NInput,
  NTooltip,
  NPopover,
  NSpace,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NGlobalStyle,
  NConfigProvider,
  NDialogProvider,
  NMessageProvider,
  NLoadingBarProvider
} from 'naive-ui';

const naive = create({
  components: [
    NH1,
    NH2,
    NP,
    NText,
    NA,
    NIcon,
    NImage,
    NAvatar,
    NButton,
    NBadge,
    NBreadcrumb,
    NBreadcrumbItem,
    NTabs,
    NTabPane,
    NList,
    NListItem,
    NDropdown,
    NMenu,
    NResult,
    NCard,
    NForm,
    NFormItemRow,
    NInput,
    NTooltip,
    NPopover,
    NSpace,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NGlobalStyle,
    NConfigProvider,
    NDialogProvider,
    NMessageProvider,
    NLoadingBarProvider
  ],
})

export function setupNaive(app) {
  app.use(naive);
}