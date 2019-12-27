package high_performace

var testDevice1 = `{"name":"meid","token":"99001277296961","id":"4193488935","deviceId":"1467146020","createdTime":1563388496986260000,"updatedTime":1563388496986260000}`

type DeviceIdentifier struct {
	Name        string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Token       string `protobuf:"bytes,2,opt,name=token" json:"token,omitempty"`
	Id          string `protobuf:"bytes,3,opt,name=id" json:"id,omitempty"`
	DeviceId    string `protobuf:"bytes,4,opt,name=deviceId" json:"deviceId,omitempty"`
	CreatedTime int64  `protobuf:"varint,5,opt,name=createdTime" json:"createdTime,omitempty"`
	UpdatedTime int64  `protobuf:"varint,6,opt,name=updatedTime" json:"updatedTime,omitempty"`
	Status      int    `protobuf:"varint,7,opt,name=status,enum=device.DeviceIdentifier_DeviceIdentifierStatusEnum" json:"status,omitempty"`
}

