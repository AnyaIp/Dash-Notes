import React from 'react';
import PropTypes from 'prop-types';
import {Tag} from 'antd';

/**
 * An Ant Design Tag component
 * See https://ant.design/components/tag
 */
const AnyaTag = (props) => {
    let {children, id, color, style, href, target} = props;

    return (
        <Tag
            id={id}
            color={color}
            style={style}
        >
            {href ? (
                <a href={href} target={target}>
                    {children}
                </a>
            ) : (
                children
            )}
        </Tag>
    );
};

AnyaTag.propTypes = {
    /**
     * Content to be displayed on the tag
     */
    children: PropTypes.node,

    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Color of the tag
     */
    color: PropTypes.string,

    /**
     * Inline CSS style
     */
    style: PropTypes.object,

    /**
     * href if the tag is set to a link
     */
    href: PropTypes.string,

    /**
     * target of the link, e.g., "_blank"
     */
    target: PropTypes.string,
};

// Default paramters
AnyaTag.defaultProps = {
    target: '_blank',
};

export default AnyaTag;
