function customrender(reactElement, maincontainer) {
    /*const domelement = document.createElement
    ( reactElement.type)
    domelement.innerHTML = reactElement.childern
    domelement.setAttribute('href', reactElement.props.href)
    domelement.setAttribute('target', reactElement.props.target)

    maincontainer.appendChild(domelement)*/

    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
            if (prop === 'children') continue;
            domelement.setAttribute(prop, reactElement.props [prop])
        }
        maincontainer.appendChild(domelement)
    }

const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'click to visit google'
}

const maincontainer = document.querySelector('#root')

customrender (reactElement, maincontainer)