import { ThirdPersonPerspective } from './perspectives/thirdperson/third-person.perspective'
// import { DesignerPerspective } from './perspectives/designer/designer.perspective'

enum PerspectiveType {
    DESIGNER = 'designer',
    THIRD_PERSON = 'third-person',
}

enum RenderQuality {
    LOW,
    MEDIUM,
    HIGH,
}

const options = {
    perspective: PerspectiveType.THIRD_PERSON,
    quality: RenderQuality.HIGH,
}


let perspective: /*DesignerPerspective |*/ ThirdPersonPerspective;
perspective = options.perspective == PerspectiveType.THIRD_PERSON ? new ThirdPersonPerspective() : null;
if (perspective) {
    perspective.run();
}
