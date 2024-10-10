import { FirstFlyStage } from './stages/first-fly.stage'

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
    perspective: PerspectiveType.DESIGNER,
    quality: RenderQuality.HIGH,
}


let stage: FirstFlyStage = new FirstFlyStage();
stage.init().then(
    () => {
        stage.run(0);
    }
);
