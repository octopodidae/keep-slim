<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Swiming
 *
 * @ORM\Table(name="swiming")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SwimingRepository")
 */
class Swiming
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Date", type="datetimetz")
     */
    private $date;

    /**
     * @var int
     *
     * @ORM\Column(name="Distance", type="integer")
     */
    private $distance;

    /**
     * @var int
     *
     * @ORM\Column(name="NbOfTimesPerWeek", type="smallint")
     */
    private $nbOfTimesPerWeek;

    /**
     * @var string
     *
     * @ORM\Column(name="SwimmingPool", type="string", length=255, nullable=true)
     */
    private $swimmingPool;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Swiming
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set distance
     *
     * @param integer $distance
     *
     * @return Swiming
     */
    public function setDistance($distance)
    {
        $this->distance = $distance;

        return $this;
    }

    /**
     * Get distance
     *
     * @return int
     */
    public function getDistance()
    {
        return $this->distance;
    }

    /**
     * Set nbOfTimesPerWeek
     *
     * @param integer $nbOfTimesPerWeek
     *
     * @return Swiming
     */
    public function setNbOfTimesPerWeek($nbOfTimesPerWeek)
    {
        $this->nbOfTimesPerWeek = $nbOfTimesPerWeek;

        return $this;
    }

    /**
     * Get nbOfTimesPerWeek
     *
     * @return int
     */
    public function getNbOfTimesPerWeek()
    {
        return $this->nbOfTimesPerWeek;
    }

    /**
     * Set swimmingPool
     *
     * @param string $swimmingPool
     *
     * @return Swiming
     */
    public function setSwimmingPool($swimmingPool)
    {
        $this->swimmingPool = $swimmingPool;

        return $this;
    }

    /**
     * Get swimmingPool
     *
     * @return string
     */
    public function getSwimmingPool()
    {
        return $this->swimmingPool;
    }
}

