<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Swimming
 *
 * @ORM\Table(name="swimming")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SwimmingRepository")
 */
class Swimming
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
     * @return Swimming
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
     * @return Swimming
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
     * Set swimmingPool
     *
     * @param string $swimmingPool
     *
     * @return Swimming
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

