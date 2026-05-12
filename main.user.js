// ==UserScript==
// @name         1panel-Dazzling-Black-Theme
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  这个脚本是干嘛的，一句话说清楚
// @author       你的名字
// @match        http://192.168.1.1/*
// ==/UserScript==

(function () {

      const style = document.createElement('style');
      style.innerHTML = `
        /* ===== 全局 ===== */
        *, *::before, *::after {
            border-color: #2e2e2e !important;
            box-shadow: none !important;
        }
        html, body {
            background: #121212 !important;
            color: #e0e0e0 !important;
        }

        /* ===== 顶部导航栏 ===== */
        .navbar,
        .el-header,
        header {
            background: #1a1a1a !important;
            border-bottom: 1px solid #2e2e2e !important;
        }

        /* ===== 侧边栏 ===== */
        .sidebar,
        .el-aside,
        .el-menu,
        .el-menu--vertical {
            background: #161616 !important;
            border-right: 1px solid #2e2e2e !important;
        }
        .el-menu-item,
        .el-submenu__title {
            background: transparent !important;
            color: #f2f2f2 !important;
        }
        .el-menu-item:hover,
        .el-submenu__title:hover {
            background: #252525 !important;
            color: #ffffff !important;
        }
        .el-menu-item.is-active,
        .el-menu-item.is-active * {
            background: #1f1f1f !important;
            color: #4fc3f7 !important;
        }

        /* ===== 主内容区 ===== */
        .el-main,
        main,
        .main-content,
        .content-wrapper {
            background: #121212 !important;
        }

        /* ===== 卡片 ===== */
        .card,
        .el-card,
        .el-card__body,
        .el-card__header {
            background: #1e1e1e !important;
            border: 1px solid #2e2e2e !important;
            border-radius: 8px !important;
            color: #e0e0e0 !important;
        }

        /* ===== 按钮 ===== */
        button,
        .el-button {
            background: #2a2a2a !important;
            border: 1px solid #3a3a3a !important;
            color: #ffffff !important;
            border-radius: 6px !important;
        }
        button:hover,
        .el-button:hover {
            background: #333333 !important;
            border-color: #4fc3f7 !important;
            color: #ffffff !important;
        }
        .el-button--primary {
            background: #0d47a1 !important;
            border-color: #1565c0 !important;
            color: #ffffff !important;
        }
        .el-button--primary:hover {
            background: #1565c0 !important;
            border-color: #4fc3f7 !important;
        }
        .el-button--danger {
            background: #7f0000 !important;
            border-color: #b71c1c !important;
            color: #ffcdd2 !important;
        }
        .el-button--success {
            background: #1b5e20 !important;
            border-color: #2e7d32 !important;
            color: #c8e6c9 !important;
        }
        .el-button--warning {
            background: #e65100 !important;
            border-color: #bf360c !important;
            color: #ffe0b2 !important;
        }

        /* ===== 链接 ===== */
        a {
            color: #4fc3f7 !important;
        }
        a:hover {
            color: #81d4fa !important;
        }

        /* ===== 表格 ===== */
        table,
        .el-table,
        .el-table__body-wrapper,
        .el-table__header-wrapper {
            background: #1e1e1e !important;
            color: #e0e0e0 !important;
        }
        .el-table th,
        .el-table__cell,
        th {
            background: #252525 !important;
            color: #b0b0b0 !important;
            border-bottom: 1px solid #2e2e2e !important;
        }
        .el-table tr {
            background: #1e1e1e !important;
        }
        .el-table tr:hover td,
        .el-table--enable-row-hover .el-table__body tr:hover > td {
            background: #2a2a2a !important;
        }
        .el-table__empty-block {
            background: #1e1e1e !important;
        }
        td {
            border-bottom: 1px solid #2a2a2a !important;
        }

        /* ===== 输入框 ===== */
        input,
        textarea,
        .el-input__inner,
        .el-textarea__inner,
        .el-input__wrapper {
            background: #1a1a1a !important;
            border: 1px solid #3a3a3a !important;
            color: #e0e0e0 !important;
            border-radius: 6px !important;
        }
        input:focus,
        textarea:focus,
        .el-input__inner:focus,
        .el-textarea__inner:focus {
            border-color: #4fc3f7 !important;
            outline: none !important;
        }
        input::placeholder,
        textarea::placeholder,
        .el-input__inner::placeholder {
            color: #555555 !important;
        }

        /* ===== 下拉菜单 / Select ===== */
        .el-select-dropdown,
        .el-dropdown-menu,
        .el-popper,
        .el-select__popper {
            background: #1e1e1e !important;
            border: 1px solid #2e2e2e !important;
            color: #e0e0e0 !important;
        }
        .el-select-dropdown__item,
        .el-dropdown-menu__item {
            color: #c0c0c0 !important;
        }
        .el-select-dropdown__item:hover,
        .el-dropdown-menu__item:hover {
            background: #2a2a2a !important;
            color: #ffffff !important;
        }
        .el-select-dropdown__item.selected {
            color: #4fc3f7 !important;
        }

        /* ===== 弹窗 / Dialog ===== */
        .el-dialog,
        .el-dialog__header,
        .el-dialog__body,
        .el-dialog__footer {
            background: #1e1e1e !important;
            color: #e0e0e0 !important;
            border: 1px solid #2e2e2e !important;
        }
        .el-dialog__title {
            color: #ffffff !important;
        }
        .el-overlay {
            background: rgba(0, 0, 0, 0.75) !important;
        }

        /* ===== 标签 / Tag ===== */
        .el-tag {
            background: #252525 !important;
            border-color: #3a3a3a !important;
            color: #c0c0c0 !important;
        }
        .el-tag--success { background: #1b3a1e !important; color: #a5d6a7 !important; border-color: #2e7d32 !important; }
        .el-tag--danger  { background: #3a1010 !important; color: #ef9a9a !important; border-color: #b71c1c !important; }
        .el-tag--warning { background: #3a2000 !important; color: #ffcc80 !important; border-color: #e65100 !important; }
        .el-tag--info    { background: #1a2a3a !important; color: #90caf9 !important; border-color: #1565c0 !important; }

        /* ===== 标签页 / Tabs ===== */
        .el-tabs__header,
        .el-tabs__nav-wrap {
            background: #1a1a1a !important;
            border-bottom: 1px solid #2e2e2e !important;
        }
        .el-tabs__item {
            color: #ffffff !important;
        }
        .el-tabs__item.is-active {
            color: #4fc3f7 !important;
        }
        .el-tabs__active-bar {
            background: #4fc3f7 !important;
        }

        /* ===== 分页 ===== */
        .el-pagination button,
        .el-pagination .el-pager li {
            background: #1e1e1e !important;
            color: #c0c0c0 !important;
            border: 1px solid #2e2e2e !important;
        }
        .el-pagination .el-pager li.is-active {
            background: #0d47a1 !important;
            color: #ffffff !important;
        }

        /* ===== 进度条 ===== */
        .el-progress-bar__outer {
            background: #2a2a2a !important;
        }

        /* ===== 面包屑 ===== */
        .el-breadcrumb__inner,
        .el-breadcrumb__separator {
            color: #888888 !important;
        }
        .el-breadcrumb__inner.is-link:hover {
            color: #4fc3f7 !important;
        }

        /* ===== 通知 / Alert ===== */
        .el-alert {
            background: #252525 !important;
            border: 1px solid #3a3a3a !important;
        }
        .el-alert--success { border-color: #2e7d32 !important; background: #1b3a1e !important; }
        .el-alert--error   { border-color: #b71c1c !important; background: #3a1010 !important; }
        .el-alert--warning { border-color: #e65100 !important; background: #3a2000 !important; }
        .el-alert--info    { border-color: #1565c0 !important; background: #1a2a3a !important; }

        /* ===== 滚动条 ===== */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
            background: #3a3a3a;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #4fc3f7;
        }

        /* ===== 代码块 / 终端 ===== */
        code, pre, .terminal, .xterm {
            background: #0d0d0d !important;
            color: #00e676 !important;
            border: 1px solid #2a2a2a !important;
        }

        /* ===== 图标颜色修正 ===== */
        .el-icon {
            color: #ffffff !important;
        }

        /* ===== 分割线 ===== */
        .el-divider {
            border-color: #2e2e2e !important;
        }

        /* ===== 统计数字高亮 ===== */
        .el-statistic__number {
            color: #4fc3f7 !important;
        }

        /* ===== 自定义补丁 ===== */

        /* 首页概览数字 → 红色 */
        .h-overview .count span[data-v-e64db1a3] {
            font-size: 35px !important;
            color: #d07f7f !important;
            line-height: 32px !important;
            cursor: pointer !important;
        }

        /* 小屏幕（≤1300px）概览数字缩小 + 白色
           用 html body 提升特异性，确保覆盖 Vue scoped 样式 */
        @media only screen and (max-width: 1300px) {
            html body .h-overview span[data-v-e64db1a3]:first-child {
                font-size: 22px !important;
                color: #ffffff !important;
            }
        }

        /* 卡片文字颜色 */
        .card, .el-card, .el-card__body, .el-card__header {
            color: #f9f53f !important;
        }

        /* 输入提示文字 */
        .input-help {
            font-size: 22px !important;
            word-break: keep-all !important;
            color: #ffffff !important;
            width: 100% !important;
            display: inline-block !important;
            white-space: pre-line !important;
        }

        /* 警告文字 */
        .app-warn span:first-child {
            color: #ffffff !important;
        }

        /* 复选框文字 */
        .el-checkbox {
            --el-checkbox-text-color: #ffffff !important;
        }

        /* check-tag */
        .el-check-tag {
            color: #ffffff !important;
        }

        /* 应用描述文字 */
        .app .app-description[data-v-09934e01] {
            font-size: 16px !important;
            color: #fffffd !important;
        }

        /* 表格表头文字 → 白色 */
        .el-table th,
        .el-table__cell,
        th {
            background: #252525 !important;
            color: #ffffff !important;
            border-bottom: 1px solid #2e2e2e !important;
        }

        /* descriptions 描述列表文字 */
        html.dark .el-descriptions__content:not(.is-bordered-label),
        .el-descriptions__content:not(.is-bordered-label),
        html.dark .el-descriptions__title,
        html.dark .el-descriptions__content.el-descriptions__cell.is-bordered-content,
        .el-descriptions__content.el-descriptions__cell.is-bordered-content {
            color: #ffffff !important;
        }

        /* 暗色模式 CSS 变量覆盖 */
        html.dark {
            --panel-color-primary: #ffe800 !important;
            --panel-main-bg-color-10: #14151a !important;
            --panel-color-primary-light-3: #6e2323 !important;
        }

        /* 路由卡片单选按钮文字 */
        .router_card_button[data-v-bb90e75c] .el-radio-button__inner {
            color: #ffffff !important;
        }

        /* 标签文字统一白色 */
        .el-tag {
            color: #ffffff !important;
        }

        /* 表单标签文字 + 字号 */
        .el-form-item__label,
        html.dark .el-form-item__label {
            color: #ffffff !important;
            font-size: 22px !important;
        }

        /* 子菜单标题 */
        .el-sub-menu__title {
            color: #ffffff !important;
        }

        /* 标签页 padding */
        .el-tabs__item {
            padding: 0 40px !important;
        }

        /* info 文字颜色 */
        .el-text.el-text--info {
            --el-text-color: #ffffff !important;
            color: #ffffff !important;
        }

        /* 首页系统信息轮播字号 */
        .my-carousel[data-v-e64db1a3] .h-systemInfo .system-content {
            font-size: 23px !important;
        }
    `;
    document.head.appendChild(style);

    /* 动态加载元素补丁（MutationObserver） */
    const observer = new MutationObserver(() => {
        // Element Plus 弹出层会挂到 body 末尾，强制重新应用
        document.querySelectorAll('.el-popper, .el-select-dropdown, .el-dialog').forEach(el => {
            el.style.setProperty('background', '#1e1e1e', 'important');
            el.style.setProperty('color', '#e0e0e0', 'important');
            el.style.setProperty('border-color', '#2e2e2e', 'important');
        });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();