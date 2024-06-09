
export const transoformData = (data: any[]) => {
    if(!data) return {};
    
    const transform:any = {};
    data.map((item) => {
        transform[item.part] = item
    });
    
    return transform; 
}

