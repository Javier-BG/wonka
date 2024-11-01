
export const Icon = ({ name }) => {
    switch (name) {
        case "oompaloompa":
            return <img width="32px" alt="" aria-hidden="true" src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" />
        case "search":
            return <img width="16px" alt="" aria-hidden="true" src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png" />
        default:
            return null;
    }
}