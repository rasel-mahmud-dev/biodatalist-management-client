import React from 'react';

const Accordion = ({openIds=[], className = "", children, ...attr}) => {


    function isOpen(dataId) {
        return openIds?.includes(dataId)
    }

    // props children manipulation
    return (
        <div className={`accordion ${className}`} {...attr}>
            {children.map(accordionItem => React.cloneElement(accordionItem,
                {
                    ...accordionItem.props.children,
                    isOpen: isOpen(accordionItem.props.dataId),
                    className: `accordion-item ${accordionItem.props.className}`
                })
            )}
        </div>
    );
};

const AccordionItem = ({children, isOpen,...attr}) => {
    return (
        <div {...attr}>
            {children.map((item, index) => {
                return (
                    <>
                        {index === 0 && item}
                        {index === 1 && isOpen && item}

                    </>
                )
            })}

        </div>
    )
}

Accordion.Item = AccordionItem

export default Accordion;


// <div {...attr}>
//     {children.map(item => React.cloneElement(item,
//         {
//             ...item.props.children,
//             className: `accordion-item ${isOpen ? "open-accordion" : "close-accordion"} ${item.props.className ? item.props.className : ""}`
//         })
//     )}
