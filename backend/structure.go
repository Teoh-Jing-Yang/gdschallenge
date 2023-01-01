package main

type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type SignUp struct {
	Email        string `json:"email"`
	Password     string `json:"password"`
	SmartMeterNo string `json:"smartMeterNo"`
}

type EnergyRequest struct {
	Energy    float64 `json:"energyAmount"`
	Price     float64 `json:"biddingPrice"`
	BuyOrSell string  `json:"BuyOrSell"`
}

type UserIDRequest struct {
	UserID string `json:"userID"`
}

type EnergyPredRequest struct {
	ProdEnergy float64 `json:"prodEnergy"`
	ConsEnergy float64 `json:"consEnergy"`
}

type BiddingRangeRequest struct {
	MaxBuyPrice  float64 `json:"maxBuyPrice"`
	MaxSellPrice float64 `json:"maxSellPrice"`
}

type Transaction struct {
	UserID string  `json:"userID"`
	Money  float64 `json:"money"`
	Energy float64 `json:"energy"`
}
type Block struct {
	Index    int         `json:"index"`
	Hash     string      `json:"hash"`
	PrevHash string      `json:"prevHash"`
	Data     Transaction `json:"data"`
}
