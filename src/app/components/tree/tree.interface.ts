import { TemplateRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';
import { ScrollerOptions } from '../scroller/scroller.interface';

/**
 * Custom node select event.
 * @see {@link Tree.onNodeSelect}
 * @event
 */
export interface TreeNodeSelectEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Node instance.
     */
    node: TreeNode;
}
/**
 * Custom node unselect event.
 * @see {@link Tree.onNodeUnSelect}
 * @extends {TreeNodeSelectEvent}
 * @event
 */
export interface TreeNodeUnSelectEvent extends TreeNodeSelectEvent {}
/**
 * Custom node expand event.
 * @see {@link Tree.onNodeExpand}
 * @extends {TreeNodeSelectEvent}
 * @event
 */
export interface TreeNodeExpandEvent extends TreeNodeSelectEvent {}
/**
 * Custom node collapse event.
 * @see {@link Tree.onNodeCollapse}
 * @extends {TreeNodeSelectEvent}
 * @event
 */
export interface TreeNodeCollapseEvent extends TreeNodeSelectEvent {}
/**
 * Custom context menu select event.
 * @see {@link Tree.onNodeContextMenuSelect}
 * @extends {TreeNodeSelectEvent}
 * @event
 */
export interface TreeNodeContextMenuSelectEvent extends TreeNodeSelectEvent {}
/**
 * Custom node drop event.
 * @see {@link Tree.onNodeDrop}
 * @event
 */
export interface TreeNodeDropEvent {
    /**
     * Browser drag event.
     */
    originalEvent?: DragEvent;
    /**
     * Dragged node instance.
     */
    dragNode?: TreeNode | null;
    /**
     * Dropped node instance.
     */
    dropNode?: TreeNode | null;
    /**
     * Index of the dragged node.
     */
    index?: number;
    /**
     * Callback to invoke on drop.
     */
    accept?: Function;
}
/**
 * Custom lazy load event.
 * @see {@link Tree.onLazyLoad}
 */
export interface TreeLazyLoadEvent {
    /**
     * First element in viewport.
     */
    first: any;
    /**
     * Last element in viewport.
     */
    last: any;
}
/**
 * Custom scroll index change event.
 * @see {@link Tree.onScrollIndexChange}
 */
export interface TreeScrollIndexChangeEvent extends TreeLazyLoadEvent {}
/**
 * Custom scroll event.
 * @see {@link Tree.onScroll}
 */
export interface TreeScrollEvent {
    /**
     * Browser event.
     */
    originalEvent?: Event;
}
/**
 * Custom filter event.
 * @see {@link Tree.onFilter}
 */
export interface TreeFilterEvent {
    /**
     * Filter value.
     */
    filter: string;
    /**
     * Filtered nodes.
     */
    filteredValue: TreeNode[] | null | undefined;
}
/**
 * Defines valid templates in Tree.
 * @group Templates
 */
export interface TreeTemplates {
    /**
     * Custom header template.
     */
    header: TemplateRef<any>;
    /**
     * Custom empty message template.
     */
    empty: TemplateRef<any>;
    /**
     * Custom footer template.
     */
    footer: TemplateRef<any>;
    /**
     * Custom loader template.
     * @param {Object} context - loader options.
     */
    loader(context: {
        /**
         * Scroller options.
         * @see {@link ScrollerOptions}
         */
        options: ScrollerOptions;
    }): TemplateRef<{ options: ScrollerOptions }>;
    /**
     * Custom toggler icon template.
     * @param {Object} context - expand data.
     */
    togglericon(context: {
        /**
         * Expanded state of the node.
         */
        $implicit: boolean;
    }): TemplateRef<{ $implicit: boolean }>;
    /**
     * Custom checkbox icon template.
     * @param {Object} context - node data.
     */
    checkboxicon(context: {
        /**
         * Checked state of the node.
         */
        $implicit: boolean;
        /**
         * Partial selection state of the node.
         */
        partialSelected: boolean;
    }): TemplateRef<{ $implicit: boolean; partialSelected: boolean }>;
    /**
     * Custom loading icon template.
     */
    loadingicon: TemplateRef<any>;
    /**
     * Custom filter icon template.
     */
    filtericon: TemplateRef<any>;
}
