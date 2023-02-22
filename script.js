const App = {
    hydrate: () => {
        let buttons = document.getElementsByClassName("sectionToggle")
        console.dir(buttons)
        for (const button of buttons) {
            console.log("Adding Event Listener...")
            let section = button.closest("section")
            let header = button.closest("header")
            if (section) {
                header.addEventListener("click", App.newToggleHandler(section))
                console.dir(button)
            }
        }
    },
    newToggleHandler: (elem) => () => {
        console.log(`closed ${elem.tagName}`)
        elem.classList.toggle("closed")
    }
}