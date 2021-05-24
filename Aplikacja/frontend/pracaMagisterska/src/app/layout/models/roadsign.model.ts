export class RoadSign {
    RoadSignId?: number;
    RoadSignName: string;
    RoadSignCategory: string;
    PhotoFileName: string;
}

export class PagedSign<T>{
    results:RoadSign[];
    count:number;
}

export class DetectedSign{
    DetectedSign:string;
}
