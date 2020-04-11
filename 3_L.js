// Liskov Substitution Principle
// 1st example
// =========================

class Person {
    
}

class Member extends Person {
    access() {
        console.log('You have access')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You have not access')
    }
}

function openSecureDoor(member) {
    member.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
// openSecureDoor(new PersonFromDifferentCompany()) // Here should be member

// 2nd example
// =========================

class Component {

}

class ComponentWithTemplate extends Component{
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent (component) {
    console.log(component.render())
}

renderComponent(new FooterComponent())
renderComponent(new FooterComponent())