import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlane, faSquare } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
    fas:{
        plane:faPlane,
        square:faSquare,
    }
}

export function addIcon(prefix = "fas", name) {
    if(!name) return;
    library.add(iconMap[prefix][name]);
}